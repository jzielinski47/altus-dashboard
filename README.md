# [Avantgarde Project/Altus Dashboard] - Production name
Avantgarde Project is a fully functional web application that blends usability with elegance. The primary goal is to bring together various innovative ideas into a single platform, prioritizing user experience over visual design in the initial stages. While the focus is currently on delivering a seamless and intuitive product, aesthetics are not neglected; my background as a graphic designer plays a significant role in shaping the app's overall look and feel. Ultimately, the aim is to develop a comprehensive and user-friendly dashboard that embodies my vision.


![image](https://github.com/user-attachments/assets/2d16e2eb-0e9a-4c2d-a19b-6514758fef66)

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, WebSockets

**Other:** Sessions, Passport, MongoDB, Password Hashing


## Authors

- [@jzielinski47](https://www.github.com/jzielinski47)


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


