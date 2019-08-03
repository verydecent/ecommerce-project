# Portfolio Piece: Grailed Clone

First Solo project emulating the features of the C2C Buying and Selling Platform [Grailed.com](https://grailed.com)

Grailed Clone is a Full Stack Single Page Application Worked on By Wonjae Hwang

# Technologies

### React
React is a javaScript library for building user interfaces. React's most important advances are the emphasis on components, one-way data flow, the Virtual DOM, JSX, and architecture that extends beyond HTML. React's simplicity lies in that it makes it easy to declare user-interfaces in self-contained independent components. | [View Dependency](https://reactjs.org/)

### React Router
React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. | [View Dependency](https://reacttraining.com/react-router/web/guides/quick-start)

### Node.js
Node offers a lot of advantages such as:
* JavaScript on the server: use the same programming language and paradigm for both client and server. This minimizes context switching and makes it easy to share code between the client and the server.
* single threaded: removes the complexity involved in handling multiple threads.
* asynchronous: can take full advantage of the processor it’s running on. This matters because the node process will be running on a single CPU.
* npm repository: access the the largest ecosystem of useful libraries (most of them free to use) in the form of npm modules.

Also, Node allows for data interchange in `JSON (JavaScript Object Notation)` format between the client and the server.

### Express
Express is a web application framework that sits on top of Node.js web server. We chose Express because it offers:
* Simplicity
* Flexibility
* Scalability
* It is intuitive

Express main features are:
* Middleware:
When sending a request, you can use `middleware functions` to verify the request before getting the response. After using a middleware on a response, it can allow the response to return or call the next middleware.

* Routing:
Using routes is a way to break the application into smaller components (similar to React). Each route can have its own middleware. Having different routes also allows a team of many people to work on different endpoints at the same time.

The drawbacks of using Node+Express is that due to the flexibility and control it provides, we needed to make more decisions in regards to the Backend architecture. It also offers very little out of the box compared to other frameworks. You also need to do all the error handlings yourself.

[View Dependency](https://expressjs.com/)

### Knex
Knex can be used as an SQL query builder in Node.JS. Knex provides schema building features to create and modify a database and tables.
A database migration describes changes made to the structure of a database. Things like adding new tables, modifying existing ones or removing a column from a table are all migrations.

We used Knex to build our database schema. | [View Dependency](https://knexjs.org/)

### Cors
Third party middleware to make it easy to configure CORS in a Node.js application. | [View Dependency](https://www.npmjs.com/package/cors)

### Helmet
Third party middleware for configuring security headers in a Node.js application. | [View Dependency](https://www.npmjs.com/package/helmet)

### Morgan
Third party middleware for logging in Node.js applications. | [View Dependency](https://www.npmjs.com/package/morgan)

### JSON Web Token
Industry standard RFC 7519 method for representing claims securely between two parties. | [View Dependency](https://www.npmjs.com/package/jsonwebtoken)

### Bcryptjs
String Hashing module from NPM. | [View Dependency](https://www.npmjs.com/package/bcryptjs)