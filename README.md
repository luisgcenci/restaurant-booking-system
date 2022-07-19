# NodeJS Backend App - Starter
NodeJS app on express framework backed by a MongoDB database following MVC pattern. Includes User Model with CRUD services, as well signin/signup endpoints. Passwords are encrypted using bcryptjs.

# Minimum Dependencies
[NodeJS](https://nodejs.org/en/download/) \
[MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/) \
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


# Features

**Authentication**  using Email and Password \
Add `(signup/signin)` / Update / Delete Users

# Application Structure

```
backend
├── config
│   └── database.js
├── controllers
│   └── User.controller.js
├── middleware
│   └── auth.js
├── models
│   └── User.js
├── routes
│   └── User.routes.js
├── server.js
└── services
    └── UserService.js
```

- **config/ -** Mongoose config to connect with MongoDB.
- **controllers/ -** Serves the responses.
- **middleware/ -** Verifies JWT Token.
- **models/ -** Schema definitions for mongoose models.
- **routes/ -** Routes for API.
- **server.js -** Entry point of application.
- **services/ -** Business logic between controllers and models.
  
# Set Up
### Clone this repo 
```https://github.com/luisgcenci/signup-login-nodejs-backend-app.git```
### Install Dependencies
```yarn install```

### Open .env file and insert mongodb uri and replace TOKEN_KEY with a random string.

> TOKEN_KEY is used to create JWT Auth.
```
MONGO_URI="mongodb+srv://username:password@databasename.bmpbw.mongodb.net/?retryWrites=true&w=majority"
TOKEN_KEY="RANDOMSTRING"
```

### How to Run
```node server.js```

# Endpoints
### **URL**: `/api/v1/users/signup`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password"
}
```

## Success Response

**Code** : `201 OK` 

<<<<<<< HEAD
Returns JWT Auth Token `(application/json)`
=======
Returns JWT Auth Token ```(application/json)```
>>>>>>> 72382fcca376954bdd74248b1ccf4091955084a5

**Content example**

```json
{
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0"
}
```
---
### **URL**: `/api/v1/users/signin`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password"
}
```

## Success Response

**Code** : `201 OK`

<<<<<<< HEAD
Returns JWT Auth Token `(Application JSON)`
=======
Returns JWT Auth Token ```(application/json)```
>>>>>>> 72382fcca376954bdd74248b1ccf4091955084a5

**Content example**

```json
{
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0"
}
```
---
### **URL**: `/api/v1/users/updateusername`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password",
    "newUsername": "newUsername"
}
```

## Success Response

**Code** : `201 OK`

<<<<<<< HEAD
Returns user object  `(application/json)`
=======
Returns user object ```(application/json)```
>>>>>>> 72382fcca376954bdd74248b1ccf4091955084a5

**Content example**

```json
{
    "_id": "62cf9be8f3c2a3447e210277",
    "username": "newUsername",
    "password": "$2a$10$Z9XNnzvPA77VnggiEtE9juJvFNXFbVVMtSrhNJTPDfpKLM2jF/keO",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0",
    "__v": 0
}
```
---
### **URL**: `/api/v1/users/updatepassword`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password",
    "newPassword": "newPassword"
}
```

## Success Response

**Code** : `201 OK`

<<<<<<< HEAD
Returns user object `(Application JSON)`
=======
Returns user object ```(application/json)```
>>>>>>> 72382fcca376954bdd74248b1ccf4091955084a5

**Content example**

```json
{
    "_id": "62cf9be8f3c2a3447e210277",
    "username": "username",
    "password": "newPasswordHashed",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0",
    "__v": 0
}
```
---
### **URL**: `/api/v1/users/deleteuser`

**Method** : `DELETE`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password"
}
```

## Success Response

**Code** : `201 OK`

<<<<<<< HEAD
Returns the count of users deleted. `(Application JSON)`
=======
Returns the count of users deleted ```(application/json)```
>>>>>>> 72382fcca376954bdd74248b1ccf4091955084a5

**Content example**

```json
{
    "deletedCount": 1
}
```
