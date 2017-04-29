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
		countTask();
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
			countTask();
		}).catch((error) => {
			console.log("addTodo error", error);
		});
	});


	let countTask = () => {
		let remainingTasks = $("#incomplete-tasks li").length;
		$("#counter").hide().fadeIn(3000).html(remainingTasks);
	};

	$(".main-container").on("click", "input[type='checkbox']", (event) => {
		firebaseAPI.checker(event.target.id).then(() => {
			firebaseAPI.writeToDom();
			countTask();
		}).catch((error) => {
			console.log("checker error", error);
		});
	});

















});
