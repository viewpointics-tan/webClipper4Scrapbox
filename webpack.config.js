module.exports = {
  entry: "./src/extractTitleAndURL.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  mode: "production",
  target: "web",
}