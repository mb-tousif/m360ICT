## Music App Backend

## technologies
- [x] Nodejs
- [x] ExpressJs,
- [x] Postgresql
- [x] Knex
- [x] Bcrypt
- [x] Jsonwebtoken
- [x] Joi

## Process to run the website locally
- clone the repository `git clone repository link`
- navigate the repository `cd repository name`
- install all the packages by `npm install || yarn install`
- `npm run dev` to start the project

### API Endpoints

#### User

- [x] Create User `POST /api/v1/users/signup`
- [x] Login User `POST /api/v1/users/login`
- [x] Get All User `GET /api/v1/users/all-users`
- [x] Get Single User `GET /api/v1/users/:id`
- [x] Update User `PATCH /api/v1/users/:id`
- [x] Delete User `DELETE /api/v1/users/:id`

#### Artist

- [x] Create Artist `POST /api/v1/artists/create`
- [x] Get All Artist `GET /api/v1/artists/all-artists`
- [x] Get Single Artist `GET /api/v1/artists/:id`
- [x] Update Artist `PATCH /api/v1/artists/update/:id`
- [x] Delete Artist `DELETE /api/v1/artists/delete/:id`