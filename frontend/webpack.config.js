const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // React 시작점
  output: {
    path: path.resolve(__dirname, "dist"), // 번들된 파일 위치
    filename: "bundle.js", // 번들된 파일 이름
    clean: true, // 기존 빌드 파일 정리
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // .js, .jsx 파일을 변환
        exclude: /node_modules/, // node_modules 제외
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        // jpe?g는 jpg와 jpeg를 의미한다
        use: [
        'file-loader?name=assets/images/[name].[ext]',
        // file-loader는 이미지 파일의 이름을 만들고 폴더를 이동시키는 기능을 한다
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
          // image-webpack-loader는 이미지 사이즈를 줄여주는 역할을 한다
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // import시 확장자 생략 가능
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML 템플릿
    }),
  ],
  devServer: {
    static: "./public", // 개발 서버 정적 파일 경로
    port: 3000, // 개발 서버 포트
    hot: true, // 변경 시 자동 리로딩
  },
  mode: "development",
};
