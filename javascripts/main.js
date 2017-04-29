$(document).ready(function() {

	$("#new-item").click(() => {
		$(".list-container").addClass("hide");
		$(".new-container").removeClass("hide");
	});

	$("#list-items").click(() => {
		$(".new-container").addClass("hide");
		$(".list-container").removeClass("hide");
	});

	firebaseAPI.getTodos()
	.then((results) => {
		console.log("results", results);
	})
	.catch((error) => {
		console.log("getTodos error", error);
	});























});
