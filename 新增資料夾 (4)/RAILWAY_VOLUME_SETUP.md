# Railway 永久保存設定（重要）

這個版本的網站程式已經支援 SQLite 永久資料庫與 uploads 圖片保存。

但要做到「後台新增商品後，重新部署也不消失」，Railway 必須要有真正的 Volume / Persistent Storage。

## 已支援的資料位置

請在 Railway 建立 Volume，Mount Path 設定：

```txt
/data
```

再到 Variables 新增：

```txt
PERSIST_DIR=/data
SQLITE_PATH=/data/shop.sqlite
UPLOAD_DIR=/data/uploads
SESSION_SECRET=自己設定一組很長的隨機字串
```

## 很重要

只新增 Variables 不等於永久保存。

一定要有 Volume 掛載到 `/data`，否則：

```txt
後台新增商品
↓
Railway 重新部署
↓
商品仍可能消失
```

## 如果你的 Railway 找不到 Volume

代表目前專案或方案沒有啟用 Persistent Storage。這種情況下：

- 商品資料只能暫存在 Railway 容器
- GitHub Commit / Deploy 後仍可能重置
- 建議先不要大量上架商品
- 先改用支援 Volume 的 Railway 專案，或改用外部資料庫

## 測試方式

1. 後台新增一個測試商品
2. 前台確認商品出現
3. Railway Restart
4. 商品還在：代表保存正常
5. GitHub Commit 觸發 Deploy
6. 商品還在：代表永久保存成功
