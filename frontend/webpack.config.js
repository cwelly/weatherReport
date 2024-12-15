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
