var auth_user;
var database = new Firebase();
var storage = new FirebaseStorage();

database.authenticate().then(_auth_user => {
	auth_user = _auth_user;
	// TODO
});
