const path = require('path');//引入path核心模块
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',//入口 打包index.js 
	},
	module: {
		rules: [{
			test: /\.(png|jpg|gif)$/,
			use:{
				loader: 'url-loader',
				options:{
					//placeholder 占位符
					//name:'[name].[ext]'	//打包后保留原始图片的名称
					// name: '[name]-[hash].[ext]' // 加上hsash值
					//name: '[path][name].[ext]',//创建专门的文件存储
					name: '[name].[ext]',//再或者你可以指定文件夹名称去打包
					outputPath:'imges/',
					limit: 204800 // 20KB
				}
			}
		},{
			test: /\.css$/,
			use:['style-loader', 'css-loader']
		}]
	}, 
	output: {//出口 打包后的index.js文件名字和所在的文件夹
		filename: 'bundle.js',//名字
		path: path.resolve(__dirname, 'bundle')//所在文件夹
	}
} 