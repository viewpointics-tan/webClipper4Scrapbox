import Mercury from "@postlight/mercury-parser"
import html2sb from "html2sb"
const NOTE_NAME = "brain-of-viewpointicstan"

;(async function () {
  const offset = new Date().getTimezoneOffset()
  const today = new Date(new Date().getTime() - offset * 60 * 1000)
  const todayString = today.toISOString().split("T")[0]
  const url = window.location.href

  const html = await Mercury.parse(url, { contentType: "text" })
  html2sb(html).then((result) => {
    const title = document.title.trim()
    const lines = [`#${todayString}-bookmark`, `[${url} ${title}]`, result, ""]
    const body = encodeURIComponent(lines.join("\n"))
    window.location.href =
      `https://scrapbox.io/${NOTE_NAME}/${encodeURIComponent(title)}?body=${body}`
  })

})()
