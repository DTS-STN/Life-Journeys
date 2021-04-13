FROM mhart/alpine-node:latest AS base
ENV NODE_ENV=production
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build
# ENVIRONMENT VARIABLES
# THESE NEED TO BE DEFINED AND INJECTED BEFORE
# THE NPM RUN BUILD STEP BELOW.  NEXT INJECTS
# ENVIRONMENT VARIABLES INTO THE BUILD, AND 
# DOESN'T CONSUME THEM FROM THE ENVIRONMENT
# AT RUN TIME, WHICH IS CONFUSING
ARG BUILD_DATE
ARG TC_BUILD
ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
ENV NEXT_PUBLIC_TC_BUILD=$TC_BUILD
# END OF ENVIRONMENT VARIABLES
ENV NODE_ENV=production
RUN echo $BUILD_DATE 
RUN echo $TC_BUILD
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM mhart/alpine-node:latest AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next
CMD npm run start
