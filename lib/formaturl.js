const hostlist = {
  yt: ["youtu.be","www.youtube.com","youtube.com","m.youtube.com","youtube-nocookie.com","openinyoutube.com"],
  tt: ["www.tiktok.com", "tiktok.com", "bytesdance.com", "www.tiktok.com", "vt.tiktok.com"],
  fb: ["facebook.com","www.facebook.com","fbwatch.com"]
}

function YoutubeParser(url) {
  const parses = new URL(url)
  if(hostlist.yt.indexOf(parses.host) == -1) {
    return null
  }
  if(parses.pathname.startsWith("/watch/") || parses.pathname.startsWith("/watch")) {
    return `https://youtube.com/watch?v=${parses.pathname.slice(7) || parses.searchParams.get("v")}`
  }
  if(parses.pathname.startsWith("/live")) {
    return `https://youtube.com/watch?v=${parses.pathname.slice(5)}`
  }
  if(parses.pathname.startsWith("/shorts/")) {
    return `https://youtube.com/watch?v=${parses.pathname.slice(8)}`
  }
  return null
}
function TiktokParser(url) {
  const parses = new URL(url)
  if(hostlist.tt.indexOf(parses.host) == -1) {
    return null
  }
  return url
}
function FacebookParser(url) {
  const parses = new URL(url)
  if(hostlist.tt.indexOf(parses.host) == -1) {
    return null
  }
  return null
}

module.exports = {
  YoutubeParser,
  TiktokParser,
  FacebookParser
}