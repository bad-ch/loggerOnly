const path = require("path")

module.exports = {
  mode: 'development',
  entry : "./build",
  devtool: 'source-map',
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "loggerOnly.js",
    library: {
        name: 'loggerOnly',
        type: 'umd',
        umdNamedDefine: true
      },
  }
}