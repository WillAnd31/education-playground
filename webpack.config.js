switch (process.env.NODE_ENV) {
	case 'prod':
	case 'production':
		module.exports = require('./config/webpack.prod.js');
		break;
	case 'dev':
	case 'development':
	default:
		module.exports = require('./config/webpack.dev.js');
}

// module.exports = {
// 	entry: "./client/index.tsx",
// 	output: {
// 		filename: "./dist/bundle.js",
// 	},

// 	devtool: "source-map",

// 	resolve: {
// 		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
// 	},

// 	module: {
// 		loaders: [
// 			{
// 				test: /\.tsx?$/,
// 				loader: "ts-loader"
// 			}
// 		],

// 		preLoaders: [
// 			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
// 			{
// 				test: /\.js$/,
// 				loader: "source-map-loader"
// 			}
// 		]
// 	},

// 	externals: {
// 		"react": "React",
// 		"react-dom": "ReactDOM"
// 	},
// };