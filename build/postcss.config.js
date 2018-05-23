// postcss.config.js
const autoprefixer = require('autoprefixer');
const  postcssConfig = {
	loader: "postcss-loader",
    options:{
    	plugins: [
        	require('autoprefixer')({browsers: ["last 2 versions"]})
	    ]
	}
}
module.exports = postcssConfig