$(document).ready(function() {
	let apiKeys;

	$("#new-item").click(() => {
		$(".list-container").addClass("hide");
		$(".new-container").removeClass("hide");
	});

	$("#list-items").click(() => {
		$(".new-container").addClass("hide");
		$(".list-container").removeClass("hide");
	});

	firebaseApi.firebaseCredentials().then((keys) => {
    	apiKeys = keys;
   		firebase.initializeApp(apiKeys);
    	firebaseApi.writeToDom(apiKeys);
    	countTask();
  	}).catch((error) => {
   		console.log("key errors", error);
  	});

	// firebaseApi.getTodos().then((results) => {
	// 	firebaseApi.writeToDom(apiKeys);
	// 	countTask();
	// })
	// .catch((error) => {
	// 	console.log("getTodos error", error);
	// });


	$("#add-todo-button").click(() => {
		let newTodo = {
			isCompleted: false,
			task: $("#add-todo-text").val()
		};
		console.log("newTodo", newTodo);
		firebaseApi.addTodo(newTodo).then(() => {
			$("#add-todo-text").val("");
			$(".new-container").addClass("hide");
			$(".list-container").removeClass("hide");
			firebaseApi.writeToDom(apiKeys);
			countTask();
		}).catch((error) => {
			console.log("addTodo error", error);
		});
	});

	$(".main-container").on("click", ".delete", (event) => {
		firebaseApi.deleteTodo(apiKeys, event.target.id).then(() => {
			firebaseApi.writeToDom(apiKeys);
			countTask();
		}).catch((error) => {
			console.log("error in deleteTodo", error);
		});
	});

		$(".main-container").on("click", ".edit", (event) => {
			let editText = $(event.target).closest(".col-xs-4").siblings(".col-xs-8").find(".task").html();
		firebaseApi.editTodo(event.target.id).then(() => {
			$(".list-container").addClass("hide");
			$(".new-container").removeClass("hide");
			$("#add-todo-text").val(editText);
		}).catch((error) => {
			console.log("error in editTodo", error);
		});
	});


	$(".main-container").on("click", "input[type='checkbox']", (event) => {
		firebaseApi.checker(event.target.id).then(() => {
			firebaseApi.writeToDom(apiKeys);
			countTask();
		}).catch((error) => {
			console.log("checker error", error);
		});
	});

















});
