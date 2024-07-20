const axios = require("axios")

async function FetchingWeb(url, options) {
  try {
    const fetchdata = await axios({
      ...options,
      url: url
    })
    return fetchdata
  } catch(err) {
    if(err.response) {
      return {
        error: "BadRespon",
        ...err.response
      }
    }
    return {
      error: "InternalError",
      message: err.message
    }
  }
}

module.exports = FetchingWeb