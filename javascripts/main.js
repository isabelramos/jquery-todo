$(document).ready(function() {
	let apiKeys;
	let editId = "";

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
  	}).catch((error) => {
   		console.log("key errors", error);
  	});


	$("#add-todo-button").click(() => {
		let newTodo = {
			isCompleted: false,
			task: $("#add-todo-text").val()
		};
		if (editId.length > 0) {
			firebaseApi.editTodo(apiKeys, newTodo, editId).then(() => {
				$("#add-todo-text").val("");
				editId = "";
				$(".new-container").addClass("hide");
				$(".list-container").removeClass("hide");
				firebaseApi.writeToDom(apiKeys);
				countTask();
			}).catch((error) => {
				console.log("addTodo error", error);
			});
		} else {
			firebaseApi.addTodo(apiKeys, newTodo).then(() => {
				$("#add-todo-text").val("");
				$(".new-container").addClass("hide");
				$(".list-container").removeClass("hide");
				firebaseApi.writeToDom(apiKeys);
				countTask();
			}).catch((error) => {
				console.log("addTodo error", error);
			});
		}
	});

	$(".main-container").on("click", ".delete", (event) => {
		firebaseApi.deleteTodo(apiKeys, event.target.id).then(() => {
			firebaseApi.writeToDom(apiKeys);
		}).catch((error) => {
			console.log("error in deleteTodo", error);
		});
	});

	$(".main-container").on("click", ".edit", (event) => {
		let editText = $(event.target).closest(".col-xs-4").siblings(".col-xs-8").find(".task").html();
		editId = event.target.id;
		$(".list-container").addClass("hide");
		$(".new-container").removeClass("hide");
		$("#add-todo-text").val(editText);
	});


	$(".main-container").on("click", "input[type='checkbox']", (event) => {
		let myTodo = {
			isCompleted: event.target.checked,
			task: $(event.target).siblings(".task").html()
		};

		firebaseApi.editTodo(apiKeys, myTodo, event.target.id).then(() => {
			firebaseApi.writeToDom(apiKeys);
		}).catch((error) => {
			console.log("checker error", error);
		});
	});

	$("#register-button").click(() => {
		let email = $("#input-email").val();
		let password = $("#input-password").val();
		let uername = $("#input-user").val();

		let user = {email, password};

		firebaseApi.registerUser(user).then((response) => {
			console.log("register response", response);
		}).catch((error) => {
			console.log("error in registerUser", error);
		});
	});















});
