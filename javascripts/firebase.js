var firebaseApi =  (() => {

	let todos = [];

	return {
		firebaseCredentials : () => {
			return new Promise((resolve, reject) => {
				$.ajax("apiKeys.json")
				.done((data) => {
					resolve(data);
				})
				.fail((error) => {
					reject(error);
				});
			});
		}
	};
})();