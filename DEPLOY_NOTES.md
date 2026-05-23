# Railway 部署修正版

這版已修正 Railway runtime 重複 npm install 導致的：

- Cannot find module 'express'
- npm error ENOTEMPTY node_modules/bl
- npm error Exit handler never called

## 重要

請不要上傳 node_modules。
請刪除 GitHub 上舊的 package-lock.json。

## Railway Variables

PERSIST_DIR=/data
RAILWAY_VOLUME_MOUNT_PATH=/data
SQLITE_PATH=/data/shop.sqlite
UPLOAD_DIR=/data/uploads
SESSION_SECRET=888SHOP_SECRET_2026

不要設定 NIXPACKS_NODE_VERSION。

## Railway Volume

Mount Path: /data

## Start command

node server.js
