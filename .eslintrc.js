module.exports = {
  root: true,
  // チェック対象のJavaScript/TypeScriptコードが、
  // どの実行環境で使われるかをESLintに伝えるためのオプション
  env: {
    browser: true,  // windowやalertなどのグローバル変数が認識される
    es2021: true,   // ES2021までに導入されたグローバル変数が認識される
  },
  // チェック対象のJavaScriptが,
  // どの構文を使っているかをESLintに伝えるためのオプション
  parserOptions: {
    ecmaVersion: "latest",  // どのバージョンのECMAScriptの構文を使うかを指定、latestは最新のECMAScriptの構文を使うという意味
    sourceType: "module",   // JavaScriptコードがどちらのモードで書かれるかを指定するオプション
  },
  // 複数のルールを組み合わせてコーディング規約を組み立てる
  // ルール名: 重大度
  // off, 	0, 	ルールをオフにする
  // warn, 	1, 	警告するが終了コードに影響しない
  // error, 2, 	警告し、終了コードを1にする
  // rules: {
  //   "no-console": "error",  
  //   camelcase: ["error", { properties: "never" }],
  //   semi: ["error", "always"],
  // },
  extends: ["airbnb-base"],
};