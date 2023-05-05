function isBot () {
  const agent = navigator.userAgent
  const bots = /(?<bots>AdsBot-Google|AdsBot-Google-Mobile|AdsBot-Google-Mobile-Apps|APIs-Google|Chrome-Lighthouse|DuplexWeb-Google|FeedFetcher-Google|Google Favicon|Googlebot|Googlebot-Image|Googlebot-News|Google-Read-Aloud|Googlebot-Video|googleweblight|PingdomPageSpeed|PTST|Mediapartners-Google)/i
  return (!agent) || bots.test(agent)
}

export default isBot
