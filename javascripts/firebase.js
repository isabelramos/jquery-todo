var firebaseAPI = (() => {

	let todos = [];

	return {
		todoGetter : () => {
			return todos;
		}
	};

})();