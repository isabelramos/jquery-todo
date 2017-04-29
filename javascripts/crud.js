var firebaseAPI = ((oldCrap) => {

	oldCrap.getTodos = () => {

		return new Promise ((resolve, reject) => {
			let items = [];
			$.ajax("./database/seed.json")
			.done((data) => {
				let response = data.items;
				Object.keys(response).forEach((key) => {
					console.log("key", key);
					response[key].id = key;
					items.push(response[key]);
				});
				firebaseAPI.setTodos(items);
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};


	return oldCrap;

})(firebaseAPI || {});