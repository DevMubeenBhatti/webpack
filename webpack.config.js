const path =require('path')
module.exports={
	mode:"production",
	entry: './src/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"output.js"
	},
	// module:{
	// 	rules:[
	// 		{
	// 			test: /\.css$/,
	// 			use:[
	// 				'css-loader',
	// 				'style-loader'
	// 			]
	// 		}
	// 	]
	// },
	devServer:{
		contentBase:path.join(__dirname, 'dist'),
		compress: true,
		port:3800
	}
}