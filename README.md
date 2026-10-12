# Portfolio

求人応募用の日本語ポートフォリオサイトです。HTML・CSSだけで構成した、PC・スマートフォン対応の1ページサイトです。フレームワーク、ビルド、依存パッケージは不要です。

## ファイルと編集

- `index.html`：プロフィール、実績、スキルなどの本文
- `style.css`：デザイン。先頭の `:root` で配色を調整できます

`index.html` をブラウザで開くと確認できます。ローカルサーバーを使う場合は、リポジトリ内で `python3 -m http.server 8000` を実行します。

### Before・After画像の追加

自社サイトの画像を `images/before.webp` と `images/after.webp` として配置し、`index.html` の比較エリアにある各 `.image-placeholder` の要素全体を、次のような画像タグに置き換えます。画像サイズに合わせて `width`・`height` を変更してください。HTML内にも編集用コメントがあります。

```html
<img src="images/before.webp" alt="リニューアル前の自社Webサイト" width="1200" height="800" loading="lazy">
<img src="images/after.webp" alt="リニューアル後の自社Webサイト" width="1200" height="800" loading="lazy">
```

顧客サイトのURL・画像は掲載しません。実績の追加・更新時は、実際に担当した内容だけを記載してください。

## GitHub Pagesで公開

1. このファイル一式をGitHubの `main` ブランチにコミットしてプッシュします。
2. リポジトリの **Settings → Pages** を開きます。
3. **Build and deployment** の **Source** で **Deploy from a branch** を選びます。
4. ブランチを **main**、フォルダを **/ (root)** にして **Save** を押します。
5. デプロイ完了後、Pages設定に表示される公開URLで確認します。

CSS・画像には相対パスを使っているため、GitHub Pagesのリポジトリ配下でも表示できます。更新は `main` へのプッシュで反映されます。
