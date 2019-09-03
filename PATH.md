
const path = require('path')


|- join 
|- resolve()
|- relative(from, to)  返回from 到 to 的 相对路径
|- normalize    处理重复的 \ / 以及 ..  . 
|- dirname  路径
|- extname  路径的拓展名
|- sep  \ on windows   / on posix
|- basename(path, ext)
    |-- path.basename('/foo/bar/index.html', '.html')   [index]
|- delimiter 分隔符  ;for windows  | :for posix
|- parse()
|- format({})
    |-- dir     ${dir}${path.sep}${base} 存在dir忽略root
    |-- root      ${root}${base}  存在base忽略ext
    |-- name    ${root}${name}${ext} 
    |-- ext
    |-- base
|- isAbsolute