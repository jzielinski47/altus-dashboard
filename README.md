# Altus Dashboard
Altus is a fully functional dashboard that embodies my long-standing vision of a clean and intuitive web application. For several years, I aspired to create such a project but lacked the time while working as a barista at Krakow International Airport. By the last quarter of 2024, I successfully delivered it in its Minimum Viable Product (MVP) state. The app steadily progressed as I developed it alongside my primary university tasks, working on it in my spare time, driven by a passion to create something unique and truly my own in a field I was deeply passionate about. Inspired by the quote Non omnis moriar, Altus stands as a reflection of my journey and growth as a web developer.

## Tech Stack

**Frontend:** React, TailwindCSS (TypeScript)

**Backend:** Node JS, Express JS, Passport JS (TypeScript)

**Database:** MongoDB

**Other features:** Session-based authentication with RBAC, Rest API

## Authors

- [@jzielinski47](https://www.github.com/jzielinski47)

## License
This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0).  
You may use, share, and adapt this project for non-commercial purposes only.  
For commercial use, please contact me at jzielinski47dev@gmail.com.

## API Reference

### Authentication Endpoints

#### Sign Up a User
```http
POST /api/auth/signup
```
Creates a new user account.
| Parameter	 | Type | Description |
| -----------| ----| -------- |
| username |	string	| Required. Username of the user|
| email |	string |	Required. Email of the user |
| password	|string	| Required. Password for the user |

#### Log In a User
```http
POST /api/auth
```
Authenticates a user.
| Parameter	 | Type | Description |
| -----------| ----| -------- |
| username	|string	|Required. Username of the user|
| password	|string	|Required. Password of the user|

#### Log Out a User
```http
POST /api/auth/logout
```
Logs out the currently authenticated user.

#### Check Authentication Status
```http
GET /api/auth/status
```
Returns the authentication status of the current user.

### User Management Endpoints

#### Get All Users
```http
GET /api/users
```
Returns a list of all users.

#### Get Active Users Count
```http
GET /api/users/count
```
Returns the count of currently active users.

#### Delete a User
```http
POST /api/users/delete/:username
```
Deletes a user. Administrator rights required.

| Parameter |	Type	| Description |
| ---- | --- | --|
|username	| string |	Required. Username of the user to delete|

#### Update a User's Username
```http
PATCH /api/users/patch/username/:username
```
Updates the username of an existing user.

| Parameter |	Type	| Description |
| ---- | --- | --|
| username	| string |	Required. Current username of the user | 
| newUsername |	string |	Required. New username to update to |

#### Grant Administrator Rights
```http
PATCH /api/users/grant/:username
```
Grants administrator rights to a user. Administrator rights required.

| Parameter |	Type	| Description |
| ---- | --- | --|
| username	| string |	Required. Username of the user to promote | 

#### Get User Details (Current User)
```http
GET /api/users/me
```
Returns the details of the authenticated user.

#### Get All User Data (Admin Only)
```http
GET /api/admin
```
Returns detailed data for all users. Administrator rights required.

## Key Functionalities:
- Complex user authentication system (Sessions)
- Role-based access control (RBAC) with security measures
- Modern and clean UI design
- Various features, including:
  - Session timer
  - Admin panel
  - User remembered settings
  - User statistics collection
  - User profile customization
