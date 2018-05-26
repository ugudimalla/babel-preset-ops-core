module.exports = (api) => {
	api.cache(true)

	return {
		presets: [
			require('@babel/preset-react'),
			require('@babel/preset-flow'),
			[
				require('@babel/preset-stage-0'),
				{ decoratorsLegacy: true }
			],
			[
				require('@babel/preset-env'),
				{ browsers: ['cover 99.5%'] }
			],
		],
		plugins: [
			require('babel-plugin-jsx-control-statements'),
			require('babel-plugin-dev-expression'),
			[
				require('@babel/plugin-transform-runtime'),
				{
					helpers: false,
					polyfill: false,
					regenerator: true,
					moduleName: 'babel-runtime'
				}
			],
		]
	}
}
