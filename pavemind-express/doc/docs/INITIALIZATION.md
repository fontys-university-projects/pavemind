---
stoplight-id: t7qiirhz96fm8
---

# Requirements before starting the backend

>For generating "JWT_KEY" use `require('crypto').randomBytes(64).toString('hex')` in the terminal

> PASSWORD_STRENGTH has 4 levels of security
> - 1 - Password must be 8 characters long
> - 2 - Level 1 plus 1 number and 1 letter
> - 3 - Level 2 plus 1 lowercase and 1 uppercase
> - 4 - Level 3 plus 1 symbol

>SALT_VALUE is sed for bcrypt hashing (the number is up to the user to decide, keeping in mind hardware limitations)

```js
DATABASE_URL="mongodb://user:pass@domain:27017/database?retryWrites=true&w=majority"
JWT_KEY="random string"
JWT_ISSUER="https://domain.com"
PASSWORD_STRENGTH=1
SALT_VALUE=10
```