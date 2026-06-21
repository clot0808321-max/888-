# 888 台灣商店 Railway 最終可部署版

這版重點：
- 使用 Dockerfile 強制在 Build 階段安裝 npm 套件
- 啟動時只執行 `node server.js`
- 修正 Railway 出現 `Cannot find module 'express'`
- 避免啟動時 `npm install` 造成 `ENOTEMPTY node_modules/bl`
- 保留 888 LOGO、首頁封面、Telegram 客服、SQLite + Volume 架構

## GitHub 上傳注意

請上傳這份 ZIP 解壓縮後的所有檔案。

不要上傳：
- node_modules
- package-lock.json

如果 GitHub 原本已經有 package-lock.json，可以留著也沒關係；Dockerfile 會忽略 / 刪除它。
但建議手動刪除會更乾淨。

## Railway Variables

先成功部署後，再設定：

```env
PERSIST_DIR=/data
RAILWAY_VOLUME_MOUNT_PATH=/data
SQLITE_PATH=/data/shop.sqlite
UPLOAD_DIR=/data/uploads
SESSION_SECRET=888SHOP_SECRET_2026
```

不要設定：

```env
NIXPACKS_NODE_VERSION
```

## Railway Volume

建立 Volume：

```text
Mount Path: /data
```

## 部署後測試

1. 開網站首頁
2. 登入後台
3. 新增商品
4. 上傳圖片
5. Redeploy
6. 商品與圖片仍存在 = 成功

後台預設帳密：
- 帳號：My999
- 密碼：Mas999
