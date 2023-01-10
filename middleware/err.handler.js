module.exports = (err, req, res, next) => {
	const errResObj = {
		message: 'Internal Server Error',
	};

	if (process.env.NODE_ENV !== 'production') {
		Object.assign(errResObj, { err });
	}

	res.status(500).json(errResObj);
};
