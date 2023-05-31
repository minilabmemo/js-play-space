
# js-play-space
- 根據 [MDN-JavaScript](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript) 開始著手練習
- 其他 JS 練習


## 目錄
01_js_start/
- ini_constructor.html 一般函式建構子與原型練的說明
- oojs-class-inheritance-start.html 原型練的繼承練習
- js_func_this.html  ES5/ ES6 this 的問題與箭頭函式的使用 
- js_func.html ES5/ ES6 函式宣告的不同
02_js_json
04_js_closure 閉包
05_js_promise_awit promise＆awit 
- 
blog:
[[JS] javascript 新手上路與概念筆記](https://yumememooo.github.io/2021/02/20/js-start/)


## 對 JS debug 對 JS

- 先安裝 JavaScript Debugger (Nightly), 後續會用到 node js
 
- vscode 說明 [Debugging](https://code.visualstudio.com/docs/editor/debugging), 他是教用`${workspaceFolder}\\app.js` 
  - 但這樣會報以下錯誤
```
Note: Using the "preview" debug extension
/usr/local/bin/node ./../simple_js_demo\app.js
Process exited with code 1
Uncaught Error Error: Cannot find module '/Users/yiyin/dev/front/javascript/simple_js_demo\app.js'
    at Module._resolveFilename (<node_internals>/internal/modules/cjs/loader.js:885:15)
    at Module._load (<node_internals>/internal/modules/cjs/loader.js:730:27)
    at executeUserEntryPoint (<node_internals>/internal/modules/run_main.js:72:12)
    at <anonymous> (<node_internals>/internal/main/run_main_module.js:17:47)
```
- [variables-reference](https://code.visualstudio.com/docs/editor/variables-reference)
  - ${workspaceFolder} - 在 VS Code 中打開的文件夾的路徑
  - ${fileDirname} - 當前打開文件的文件夾路徑

launch.json 設定如下
- 第一種是要自己先執行,再按下 debug 先開啟瀏覽器,這種方式我覺得跟 debug html 在瀏覽器差不多,有點麻煩
- 第二種 是多資料夾下的`app.js`, 我習慣用這個來執行不同資料夾下的 JS
- 第三種 是本地資料夾放的`app.js`
```
{
  // 使用 IntelliSense 以得知可用的屬性。
  // 暫留以檢視現有屬性的描述。
  // 如需詳細資訊，請瀏覽: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "對 localhost 啟動 Chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Open JS",
      "program": "${fileDirname}/app.js"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program ROOT JS",
      "program": "app.js"
    }
  ]
]
}

```