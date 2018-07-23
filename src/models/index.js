const context = require.context('./', false, /\.js$/);//遍历目录下的js文件，false表示不递归子目录

export default context
  .keys()
  .filter(item => item !== './index.js') // index.js不需要
  .map(key => context(key));