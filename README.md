# BugTrax

#### This project was created by Evan Miller
## To get started

To get started

### Link to app: https//estore-app.emiller12.now.sh/
- The best way to demo the site is to click the login button at the top of the site and use the demo login below or feel free to register and make a new account:
```bash
Username: jApple
Password (case sensitive): Guest2021!
```
- This project is a bug/issue management tracking system built using **React** , **CSS**, **Node**, **Express**, and **PostgreSQL**.

![screen 1](https://github.com/edelay12/BugTrax-Client/blob/master/public/screenshots/BugTrax_screen_1.png)

![screen 2](https://github.com/edelay12/BugTrax-Client/blob/master/public/screenshots/Bugtrax_screen_2.png)

![screen 3](https://github.com/edelay12/BugTrax-Client/blob/master/public/screenshots/BugTrax_screen_3.png)


## Usage
### To run the server on a local host: 

### Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

Migrate the dev database `npm run migrate`

Migrate the test database `npm run migrate:test`

### Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
2. Find the `timezone` line and set it to `UTC`:


## About this project
### Server
- The site delivers full user functionality, with, JWT Tokens, and JWT Token refresh, registration, secure login, and secure endpoints.
All user functions are encrypted with proper security measures in mind. These measures include:
JWT Tokens and Refresh are issued securly, while expiring along with the session if the user goes idle for more then 5 minutes
Password incryption using the NPM library BCrypt, with secure hashing and salting rounds
Cross Site Scripting (XSS) prevention on product adds and user registration
KnexJS provides built in SQL injection prevention
- Protected endpoints are authenticated through a JWT service middleware that checks for the API token in the header provided through the client.
- All of the client side enviornmental variables are securly hidden in .env files.
- Best RESTful practices were used when building the server.
### Client
- The client side uses React Router, with public and private routes.
- Context API provides State management.
