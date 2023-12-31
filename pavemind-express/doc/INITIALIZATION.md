# Requirements before starting the backend

>For generating "JWT_KEY" use `require('crypto').randomBytes(64).toString('hex')` in the terminal

> PASSWORD_STRENGTH has 4 levels of security
> - 1 - Password must be 8 characters long
> - 2 - Level 1 plus 1 number and 1 letter
> - 3 - Level 2 plus 1 lowercase and 1 uppercase
> - 4 - Level 3 plus 1 symbol

>SALT_VALUE is sed for bcrypt hashing (the number is up to the user to decide, keeping in mind hardware limitations)

>ORIGIN is for the CORS protection
```js
DATABASE_URL="mongodb://user:pass@domain:27017/database?retryWrites=true&w=majority"
JWT_KEY="random string"
JWT_ISSUER="https://domain.com"
PASSWORD_STRENGTH=1
SALT_VALUE=10
ORIGIN="http://example.com"
```

Please note Prisma ORM is using in this case MongoDB, which means you need to enable `replica set`, it does not need to have two servers, just the main one needs to be rs initiated 

https://adelachao.medium.com/create-a-mongodb-replica-set-in-windows-edeab1c85894

>if you are too lazy to do the steps you can get MongoDB Atlas (its free), it already is with Replica Set