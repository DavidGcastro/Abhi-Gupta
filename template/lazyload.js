const lazyLoadImage = imgName => {
	return (node) => {
		import(
		/* webpackMode: "lazy" */
			'../assets/projectImages/squirl.gif'
		)
			.then( src => node.src = src)
			.catch(err => console.error(err));
	};
	
};

module.exports = lazyLoadImage;