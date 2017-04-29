$(document).ready(function() {

	$("#new-item").click(() => {
		$(".list-container").addClass("hide");
		$(".new-container").removeClass("hide");
	});

	$("#list-items").click(() => {
		$(".new-container").addClass("hide");
		$(".list-container").removeClass("hide");
	});

	firebaseAPI.getTodos().then((results) => {
		firebaseAPI.writeToDom();
	})
	.catch((error) => {
		console.log("getTodos error", error);
	});


	$("#add-todo-button").click(() => {
		let newTodo = {
			isCompleted: false,
			task: $("#add-todo-text").val()
		};
		console.log("newTodo", newTodo);
		firebaseAPI.addTodo(newTodo).then(() => {
			$("#add-todo-text").val("");
			$(".new-container").addClass("hide");
			$(".list-container").removeClass("hide");
			firebaseAPI.writeToDom();
		}).catch((error) => {
			console.log("addTodo error", error);
		});
	});






















});
