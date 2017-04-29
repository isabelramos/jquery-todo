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























});
