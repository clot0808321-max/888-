FROM node:20-bookworm-slim

WORKDIR /app

# better-sqlite3 may need native build tools if prebuilt binary is unavailable
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ pkg-config \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# Do not trust old package-lock from GitHub/cache. Fresh install every build.
RUN rm -f package-lock.json \
  && npm cache clean --force \
  && npm install --omit=dev --no-audit --no-fund

COPY . .

ENV NODE_ENV=production
# 提醒 Railway / Docker：資料建議掛載到 /data
EXPOSE 3000

CMD ["node", "server.js"]
