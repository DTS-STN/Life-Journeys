FROM node:current-alpine AS base
ENV NODE_ENV=production
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build
ARG BUILD_DATE
ARG TC_BUILD
ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
ENV NEXT_PUBLIC_TC_BUILD=$TC_BUILD
ENV NODE_ENV=production
RUN echo $BUILD_DATE 
RUN echo $TC_BUILD
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next
RUN npm install next

CMD npm run start
