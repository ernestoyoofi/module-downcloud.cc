# @ernestoyoofi/downcloud.cc

A Scrap API to download media such as videos or songs on several platforms such as Tiktok, Facebook and YouTube.

> I do not cooperate with these sites, I just make scrap tools illegally which may not be good to use.

## Installation

```bash
npm i @ernestoyoofi/downcloud.cc
# Or
yarn add @ernestoyoofi/downcloud.cc
```

## Usage

Initialize the module like the example below

```js
const DownloadCloudCC = require("@ernestoyoofi/downcloud.cc")
const apiDown = new DownloadCloudCC({
  downloadapi: "", // Default is "https://ab.cococococ.com/ajax/download.php?copyright=0&format={FORMAT}&url={URL}&api={API}"
  progressapi: "" // Default is "https://p.oceansaver.in/ajax/progress.php?id={ID_CONTENT}"
  header: {} // Default config, check "./lib/config.js"
})
```

Some uses are as below

**getDetailInfo**

View details before processing or performing a download task

```js
const DownloadCloudCC = require("@ernestoyoofi/downcloud.cc")
const apiDown = new DownloadCloudCC()
const result = await api.getDetailInfo("https://www.youtube.com/shorts/LY87Kmem5XM", "mp3", { withtoken = false })
```

Result:

```json
{
  "success": true,
  "id": "41fMdxPL4j4UigmCsxUKZz9.YWRhbTE1Lm9jZWFuc2F2ZXIuaW4=",
  "content": "CiAgICAgICAgPGRpdiBpZD0iY2FyZC00MWZNZHhQTDRqNFVpZ21Dc3hVS1p6OS5ZV1JoYlRFMUxtOWpaV0Z1YzJGMlpYSXVhVzQ9IiBjbGFzcz0iZG93bmxvYWQtY2FyZCBteC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBmbGV4Ij4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibWQ6ZmxleCBmbGV4Ij4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1kOmZsZXgtc2hyaW5rLTAiPgogICAgICAgICAgICAgICAgICAgIDxpbWc...",
  "title": "1 View = 1 Meal Donated (ft. MrBeast)",
  "info": {
    "image": "https://i.ytimg.com/vi/LY87Kmem5XM/hqdefault.jpg",
    "title": "1 View = 1 Meal Donated (ft. MrBeast)"
  },
  "repeat_download": true,
  "message": "If you want your application to use our API contact us: sp_golubev@protonmail.com or visit https://video-download-api.com/"       
}
```

**progressFile**

Get file progress info until completion, this method uses a loop method like on the main site.

```js
const DownloadCloudCC = require("@ernestoyoofi/downcloud.cc")
const apiDown = new DownloadCloudCC()
const result = await api.progressFile("41fMdxPL4j4UigmCsxUKZz9.YWRhbTE1Lm9jZWFuc2F2ZXIuaW4=")
```

Result:

```txt
https://adam15.oceansaver.in/pacific/?41fMdxPL4j4UigmCsxUKZz9.YWRhbTE1Lm9jZWFuc2F2ZXIuaW4=
```

**download**

Downloading by performing the information retrieval method on `getDetailInfo` then followed by `progressFile`

```js
const DownloadCloudCC = require("@ernestoyoofi/downcloud.cc")
const apiDown = new DownloadCloudCC()
const result = await api.download("https://www.youtube.com/shorts/LY87Kmem5XM", "mp4")
```

Result:

```json
{
  "image": ""
  "title": "1 View = 1 Meal Donated (ft. MrBeast)",
  "download": 
"https://adam15.oceansaver.in/pacific/?41fMdxPL4j4UigmCsxUKZz9.YWRhbTE1Lm9jZWFuc2F2ZXIuaW4="
}
```

Problems occur, report them or [push on issues](https://github.com/ernestoyoofi/module-downcloud.cc/issues) that you find.