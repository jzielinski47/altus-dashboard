# Altus Dashboard
Altus project is a minimum viable product web application designed and developed enteirly by myself in order to the deliver a finished app, that will serve all the goeals


Altus Project is a fully functional web application that blends usability with elegance. The primary goal is to bring together various innovative ideas into a single platform, prioritizing user experience over visual design in the initial stages. While the focus is currently on delivering a seamless and intuitive product, aesthetics are not neglected; my background as a graphic designer plays a significant role in shaping the app's overall look and feel. Ultimately, the aim is to develop a comprehensive and user-friendly dashboard that embodies my vision.

The goal for now is to deliver MVP by the end of 2024. 

`early design`
![Landing Page](https://github.com/user-attachments/assets/cadb4eeb-84ed-4aad-a66f-49c0e6714b9f)

`1.0 layout` 
![image](https://github.com/user-attachments/assets/cbb66753-9079-4549-92c0-23a73ab34872)
![Untitled-1](https://github.com/user-attachments/assets/bd77db2a-30e3-4ae4-b04d-6353ad8acf06)



## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, WebSockets

**Other:** Sessions, Passport, MongoDB, Password Hashing


## Authors

- [@jzielinski47](https://www.github.com/jzielinski47) 

I'm the only author of this project, and I've designed, developed and deployed everything you see in this repository. I'll let you know if anyone else is involved. 

## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get active users count

```http
  GET /api/users/count
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete user

```http
  POST /api/users/delete/:username
```
`administrator rights required to perform this action`
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of the user you're about to get rid of from the db |

#### Promote user to an administrator

```http
  PATCH /api/users/grant/:username
```
`administrator rights required to perform this action`
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of the user you're about to promote |


#### Get all user data

```http
  GET /api/admin
```
`administrator rights required to perform this action`

2024
