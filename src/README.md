# Step Functions

## Overview

Lambda(Node.js)と条件分岐を用いた Step Functions
※S3 バケットの作成などアカウント作成時期によって料金が発生する可能性があります。
そのため、検証する際に料金が発生するかなどは個人で確認・判断して自己責任で実行してください。

### Folder Structure

```
AWS-STEP_FUNCTIONS
|-src
   |-state-lambda-1
   |   |-app.js
   |-state-lambda-2
   |   |-app.js
   |-README.md
   |-samconfig.toml
   |-sfn.asl.json
   |-template.yaml
```

### 事前準備

#### AWS

・AWS アカウントの作成
・IAM ユーザーの作成、アクセスキーの発行
※参考サイト
https://www.idaten.ne.jp/portal/page/out/secolumn/multicloud/column005.html
https://www.idaten.ne.jp/portal/page/out/secolumn/multicloud/column009.html
・S3 バケットの作成
※参考サイト
https://qiita.com/miriwo/items/41e488b79fb58fa7c952

#### ローカル端末

・AWS CLI のインストール
※参考サイト
https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html
・AWS SAM のインストール
※参考サイト
https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/install-sam-cli.html
・AWS で発行した IAM ユーザーの認証情報を設定する
※参考サイト
https://qiita.com/suuungwoo/items/66f39ac1d12c7a800d98

### ビルド

下記コマンドを実行するとビルドできます。

```
$cd src
$sam build
```

`.aws-sam`フォルダが新しく作成され、ビルドされたファイルが格納されております。

### デプロイ

1 回目のデプロイと 2 回目以降のデプロイでコマンドや操作が変わります。

#### 1 回目のデプロイ

`samconfig.toml`をどこか別のフォルダに移動させてください。
その後下記コマンドぞ実行してください。

```
$cd src
$sam build --guided
```

対話形式で`samconfig.toml`を作成できます。
ただ、新しく作成された`samconfig.toml`は利用しないため、
別フォルダに移動した`samconfig.toml`を移動させ上書きしてください。

その後下記コマンドを実行してください。

```
$sam build --profile 認証情報に登録したプロフィール名 --config-env dev
```

これで AWS へアップロードできます。

#### 2 回目以降のデプロイ

1 回目と違い下記コマンドを実行するだけでデプロイできます。

```
$cd src
$sam build --profile 認証情報に登録したプロフィール名 --config-env dev
```
