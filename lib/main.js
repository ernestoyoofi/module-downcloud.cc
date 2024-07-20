const configDef = require("./config")
const formatURL = require("./formaturl")
const FetchingWeb = require("./fetching")

class DownloadCCScrap {
  constructor(config) {
    this.config_header = {
      ...configDef.headers_default,
      ...config?.header
    }
    this.url_api = {
      download: config?.downloadapi || configDef.downloadConfig,
      progress: config?.progressapi || configDef.progressConfig
    }
  }
  async getAPIToken() {
    // Comming
    return ""
  }
  async getDetailInfo(url, format, { withtoken = false } = {}) {
    if(configDef.listFormat.indexOf(format) == -1) {
      return { error: "No formats listed here!" }
    }
    const urlQuick = formatURL.YoutubeParser(url) || formatURL.TiktokParser(url) || formatURL.FacebookParser(url)
    if(!urlQuick) {
      return { error: "No url is registered properly, please check again." }
    }
    try {
      let tokenApi = ""
      if(withtoken) {
        tokenApi = (await this.getAPIToken())
      }
      const placeURL = this.url_api.download
        .replace("{URL}", urlQuick)
        .replace("{FORMAT}", format)
        .replace("{API}", tokenApi)
      const fetching = await FetchingWeb(placeURL, {
        header: this.config_header
      })
      if(fetching.error || !fetching?.data?.success) {
        return { error: fetching.message || fetching.data }
      }
      return fetching.data
    } catch(err) {
      return { error: err.message }
    }
  }
  async progressFile(id, c = 0) {
    const fetching = await FetchingWeb(this.url_api.progress.replace("{ID_CONTENT}", id), {
      header: this.config_header
    })
    if(fetching.error && c < 5) {
      await new Promise((a) => setTimeout(a, 800))
      return await this.progressFile(id, c+1)
    }
    if(fetching?.data?.text?.toLowerCase() == "finished" && fetching?.data?.success) {
      return fetching.data.download_url
    }
    return { error: fetching.error }
  }
  async download(url, format, options = {}) {
    const info = await this.getDetailInfo(url, format, options)
    if(info.error) { return { error: info.error } }
    await new Promise((a) => setTimeout(a, 650))
    const progress = await this.progressFile(info.id)
    if(typeof progress != "string") {
      return { error: progress.error }
    }
    return {
      image: info.info.image,
      title: info.info.title,
      download: progress
    }
  }
}

module.exports = DownloadCCScrap