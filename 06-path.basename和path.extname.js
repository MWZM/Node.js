const path = require('path')
const ps = '/a/b/c/index.html'
console.log(path.basename(ps));
// path.extname()获取文件名称 不包括后缀名
console.log(path.basename(ps, '.html'));
// path.extname()获取文件后缀名
console.log(path.extname(ps, '.html'));