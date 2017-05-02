var firebaseApi = ((oldCrap) => {

	oldCrap.getTodos = (apiKeys) => {
		let items = [];
		return new Promise ((resolve, reject) => {
			$.ajax(`${apiKeys.databaseURL}/items.json`)
			.done((data) => {
				let response = data;
				Object.keys(response).forEach((key) => {
					console.log("key", key);
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};


	oldCrap.addTodo = (apiKeys, newTodo) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "POST",
				url: `${apiKeys.databaseURL}/items.json`,
				data: JSON.stringify(newTodo)
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject(error);
			});
		resolve();
		});
	};

	oldCrap.checker = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			firebaseApi.setChecked(id);
			resolve();
		});
	};

	oldCrap.deleteTodo = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "DELETE",
				url: `${apiKeys.databaseURL}/items/${id}.json`
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject(error);
			});
		});
	};

	oldCrap.editTodo = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			firebaseApi.duhlete(id);
			resolve();
		});
	};

	return oldCrap;

})(firebaseApi || {});













