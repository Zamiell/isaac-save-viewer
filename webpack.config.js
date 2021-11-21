/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "main.ts"),
  target: "web",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader" }],
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "static"),
    filename: "main.js",
  },

  resolve: {
    extensions: [".ts", ".json"],
  },

  // Enable source maps for debugging purposes
  // (this will show the line number of the real file in the browser console)
  devtool: "source-map",
};
