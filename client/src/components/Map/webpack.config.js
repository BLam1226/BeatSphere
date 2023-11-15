const path = require("path");

module.exports = {
  entry: "../src/pages/Map.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(glsl|vs|fs)$/,
        use: "raw-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
