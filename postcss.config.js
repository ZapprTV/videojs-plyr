const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = ctx => ({
    plugins: [
		postcssPresetEnv({
			browsers: "> 0%"
        }),
        ctx.env === "minify" ? cssnano({ 
            preset: [
                'cssnano-preset-default', { discardComments: false }
            ]
        }) : ""
	]
});