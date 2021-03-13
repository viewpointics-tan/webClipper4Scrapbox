module.exports = {
  entry: "./src/extractContent.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  mode: "production",
  target: "web",
}