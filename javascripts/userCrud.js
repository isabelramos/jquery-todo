var firebaseApi = ((cats) => {

	cats.addUser = (apiKeys, newUser) => {
		return new Promise((resolve, reject) => {
			$.ajax({
				method: "POST",
				url: `${apiKeys.databaseURL}/users.json`,
				data: JSON.stringify(newUser)
			}).done((response) => {
				resolve(response);
			}).fail((error) => {
				reject(error);
			});
		});
	};

	return cats;
})(firebaseApi || {});