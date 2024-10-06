const path = require("path")

module.exports = {
  mode: 'development',
  entry : "./build",
  devtool: 'source-map',
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "conLog.js",
    library: {
        name: 'conLog',
        type: 'umd',
        umdNamedDefine: true
      },
  }
}