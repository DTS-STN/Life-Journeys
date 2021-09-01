FROM node:16.8.0-alpine3.13 AS base
ENV NODE_ENV=production
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build
ARG BUILD_DATE
ARG TC_BUILD
ARG CONTENT_API
ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
RUN echo $NEXT_PUBLIC_BUILD_DATE
ENV NEXT_PUBLIC_TC_BUILD=$TC_BUILD
ENV NEXT_CONTENT_API=$CONTENT_API
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:16.8.0-alpine3.13 AS production
ENV NODE_ENV=production
ENV REPORT_A_PROBLEM_ENABLED=true
ENV NOTIFY_BASE_API_URL=https://api.notification.canada.ca
ENV NOTIFY_API_KEY=""
ENV NOTIFY_REPORT_A_PROBLEM_EMAIL=""
ENV NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID=""
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/next.config.js ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next
RUN npm install next

CMD npm run start
