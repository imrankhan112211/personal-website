/**
 * Tells Bing (and through it ChatGPT search, Copilot and Meta AI), Yandex and other
 * IndexNow engines that the site's pages changed. Run after a deploy: npm run indexnow
 */
const KEY = 'a2ef90410a881c4f3cd9d631a44a0166'
const HOST = 'abdullahalimran.com'
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow: ${urlList.length} URLs submitted, HTTP ${res.status}`)
