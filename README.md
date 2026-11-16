# Ambient Time

Windows向けのアンビエント・スクリーンアプリです。PCの無操作状態を検知し、設定時間が経過すると心地よい全画面表示を起動することを目指します。

## 現在の仕様

- 対象OS: Windows 10 / 11
- デスクトップ基盤: Electron
- UI: HTML / CSS / JavaScript
- デザイン: Dark Glass / シーン連動アクセントカラー / 左サイドバー / Smooth Motion
- 表示言語: 日本語（標準）
- 起動方式: 全画面
- 背景: 動的シーン
- 自動起動: 無操作時間を分・秒単位で設定
- バージョン: v0.1.0（UIプロトタイプ）

## 開発状況

現在はUIプロトタイプ段階です。画面遷移、シーン選択、スイッチ等の一部操作を確認できます。Electronの常駐処理、無操作検知、実際の背景アニメーション、設定永続化、自動更新は未接続です。

## 起動

UIプロトタイプは `ui-prototype/index.html` をブラウザーで開いてください。

Electronアプリとしての起動基盤は `npm install` 後に `npm start` で起動します（機能は開発途中）。

## ディレクトリ

- `ui-prototype/`: ブラウザーで確認するUIプロトタイプ
- `src/`: Electronアプリ本体
- `locales/`: 日本語などの言語リソース
- `docs/`: 仕様・設計資料
- `CHANGELOG.md`: 更新履歴

## バージョン管理

Semantic Versioningを採用します: `MAJOR.MINOR.PATCH`。
