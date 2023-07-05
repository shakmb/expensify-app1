const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssLoader = require("css-loader");

console.log(__dirname);
console.log(path.join(__dirname, "public", "dist"));

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  console.log(env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: { sourceMap: true },
              },
            ],
          }),
          test: /\.s?css$/,
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
