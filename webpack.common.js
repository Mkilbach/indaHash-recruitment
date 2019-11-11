module.exports = {
  entry: {
    main: "./src/js/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                limit: 1000, // if less than 10 kb, add base64 encoded image to css
                name: "assets/[name].[hash].[ext]" // if more than 10 kb move to this folder in build using file-loader
            }
          }
        ]
      }
    ]
  }
};