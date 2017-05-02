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


	oldCrap.addTodo = (newTodo) => {
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${firebaseApi.todoGetter().length}`;
			console.log("newTodo", newTodo);
			firebaseApi.setSingleTodo(newTodo);
			resolve();
		});
	};

	oldCrap.checker = (id) => {
		return new Promise ((resolve, reject) => {
			firebaseApi.setChecked(id);
			resolve();
		});
	};

	oldCrap.deleteTodo = (id) => {
		return new Promise ((resolve, reject) => {
			firebaseApi.duhlete(id);
			resolve();
		});
	};

	oldCrap.editTodo = (id) => {
		return new Promise ((resolve, reject) => {
			firebaseApi.duhlete(id);
			resolve();
		});
	};

	return oldCrap;

})(firebaseApi || {});













