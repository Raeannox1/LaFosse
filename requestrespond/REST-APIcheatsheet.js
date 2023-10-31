//* Errors
// HTTP/1.1 401 Unauthorized
// Content-Type: application/json
// {
//   'id': 'auth_failed',
//   'message': "You're not logged in."
// }

//* Versioning
// GET /api/foo
// Accept: application/json; version=1

//* Authentication
// curl -is https://$TOKEN@api.example.com/

//* Methods
// GET /articles/1	read, returns 200
// PUT /articles/1	edit (or path), returns 200
// DELETE /articles/1	delete, returns 200
// POST /articles	create, returns 201
// GET /articles	list, returns 200

//*  CRUD Methods
// Create
// Read
// Update
// Delete

