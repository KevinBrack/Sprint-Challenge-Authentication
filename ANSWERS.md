1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

- Middleware can be third party libraries or custom functions we create that extend the functionality of the software we are useing. In this case Express. Sessions are a way to store a clients authorization in memory on the server. Bcrypt is a middleware to provides encryption and decryption of sensitive data. JSON web tokens are a form of authentication that creates a token and expects the client to handle of passing the token with each request.

2.  What does bcrypt do in order to prevent attacks?

- Bcrypt provides encryption and decryption protocols for storing sensitive data.

3.  What are the three parts of the JSON Web Token?

- Header
- Payload
- Signiture
