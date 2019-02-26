module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.js$/,
			use: [
				options.defaultLoaders.eslint,
				{
					exclude: /node_modules/,
					use: ['eslint-loader']
				}
			]
		});

		return config;
	}
};