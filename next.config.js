module.exports = {
	async redirects() {
		return [
			{
				source: '/draft/:slug',
				destination: '/blog/:slug',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['https://i.ibb.co'],
	},
};
