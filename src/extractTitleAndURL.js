(function () {
  const offset = new Date().getTimezoneOffset()
const today = new Date(new Date().getTime() - offset * 60 * 1000)
const todayString = today.toISOString().split("T")[0]
  var title = window.prompt(
    'brain-of-viewpointicstanに追加しますか？',
    document.title
  )
  if (!title) return
  var lines = [`#${todayString}-bookmark`, "[" + window.location.href + " " + document.title + "]"]
  var quote = window.getSelection().toString()
  if (quote.trim())
    lines = lines.concat(
      quote.split(/\n/g).map(function (line) {
        return " > " + line
      })
    )
  lines.push("")
  var body = encodeURIComponent(lines.join("\n"))
  window.open(
    "https://scrapbox.io/brain-of-viewpointicstan/" +
      encodeURIComponent(title.trim()) +
      "?body=" +
      body
  )
})()
