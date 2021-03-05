import dayjs from "dayjs"
import jquery from "jquery"

const day = dayjs()
const todayString = day.format("YYYY-MM-DD")
const title = jquery("title").text()
const url = location.href

const src = `https://script.google.com/macros/s/AKfycbwiyNYPNn5bmO9epWbjhJG5kGt5BOyKys06-ok69GTuTlwG47Qgv2REWCVmppUcvsZhng/exec?date=${todayString}&title=${title}&url=${url}`
jquery("script").after(`<script src=${src}></script>`)
