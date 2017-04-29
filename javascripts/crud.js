var firebaseAPI = ((oldCrap) => {

	oldCrap.getTodos = () => {

		return new Promise ((resolve, reject) => {
			$.ajax("./database/seed.json")
			.done((data) => {
				resolve(data);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};


	return oldCrap;

})(firebaseAPI || {});