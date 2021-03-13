import Mercury from "@postlight/mercury-parser"

;(function () {
  const offset = new Date().getTimezoneOffset()
  const today = new Date(new Date().getTime() - offset * 60 * 1000)
  const todayString = today.toISOString().split("T")[0]
  const url = window.location.href

  Mercury.parse(url, { contentType: "text" }).then((result) => {
    const title = document.title.trim()
    const lines = [`#${todayString}-bookmark`, `[${url} ${title}]`, result, ""]
    const body = encodeURIComponent(lines.join("\n"))
    window.location.href =
      `https://scrapbox.io/brain-of-viewpointicstan/${encodeURIComponent(title)}?body=${body}`
  })
})()
