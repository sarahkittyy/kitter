const path = require('path');

module.exports = {
	entry: './src/frontend/Main.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader',
				options: {
					configFileName: 'tsconfig.frontend.json'
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json']
	},
	devServer: {
		port: 3001,
		proxy: {
			'**': 'http://localhost:3000'
		},
		writeToDisk: true
	}
}