module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/index',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['https://i.ibb.co'],
	},
};
