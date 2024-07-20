const configs = {
  get_token: "https://downcloud.cc/en/soundcloud-downloader",
  download: "https://ab.cococococ.com/ajax/download.php",
  downloadConfig: "https://ab.cococococ.com/ajax/download.php?copyright=0&format={FORMAT}&url={URL}&api={API}",
  progressConfig: "https://p.oceansaver.in/ajax/progress.php?id={ID_CONTENT}",
  listFormat: [
    "mp3","m4a","flac","wav","aac",
    "360","480","720","1080","4k"
  ],
  headers_default: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "origin": "https://downcloud.cc",
    "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126"',
    "sec-ch-ua-mobile": '?0',
    "sec-ch-ua-platform": '"Windows"',
  }
}

module.exports = configs