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


	oldCrap.addTodo = (newTodo) => {
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${firebaseAPI.todoGetter().length}`;
			console.log("newTodo", newTodo);
			firebaseAPI.setSingleTodo(newTodo);
			resolve();
		});
	};

	oldCrap.checker = (id) => {
		return new Promise ((resolve, reject) => {
			firebaseAPI.setChecked(id);
			resolve();
		});
	};

	oldCrap.deleteTodo = (id) => {
		return new Promise ((resolve, reject) => {
			firebaseAPI.duhlete(id);
			resolve();
		});
	};

	return oldCrap;

})(firebaseAPI || {});













