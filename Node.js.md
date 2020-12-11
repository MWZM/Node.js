### 运行环境

- JavaScript解析引擎
  - Chrome，V8
- 运行环境：代码正常运行所需的必要环境（代码在哪运行的）
  - API是运行环境提供，对应的API只能在对应的运行环境中执行
  - 组成部分
    - JavaScript引擎
    - 内置API函数
- Node.js：是一个基于Chorme V8引擎的一个**JavaScript运行环境**
  - Node.js运行环境也给我们提供一些内置API（fs，path）
  - 不同环境之间的API不能互相调用
    - 浏览器不能调用node的api
    - node不能调用浏览器的API（DOM，BOM）

### Node.js

- 运行js代码：`node [文件名]`
- fs模块
  - 文件操作模块
  - `fs.readFile(路径, 'utf8', function(err, data))`
  - `fs.writeFile(路径, 数据, function(err))`
    - 如果没有文件，则会自动新建文件，但是不会新建文件夹
- path模块
  - 字符串拼接路径存在问题
    - 相对路径是以 `node 命令`运行所在目录进行拼接，所以需要使用 `__dirname`表示当前文件所在目录进行路径拼接
    - 但是直接以 `__dirname`进行字符串拼接，无法识别 `./`，`../`等路径意义
  - `path.join(path1, path2, path3, ...)`
    - 可以拼接n个路径，最终生成一个新的路径
    - 可以识别 ../ ./等相对路径
  - `path.basename`
    - `path.basename(path)`，获取加后缀名的文件名
    - `path.basename(path, 后缀名)`，获取不加后缀名的文件名
  - `path.extname`
    - 获取路径中文件的扩展名