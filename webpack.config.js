const path = require('path');//引入path核心模块
module.exports = {
	entry: './index.js',//入口 打包index.js
	output: {//出口 打包后的index.js文件名字和所在的文件夹
		filename: 'bundle.js',//名字
		path: path.resolve(__dirname, 'bundle')//所在文件夹
	}
}