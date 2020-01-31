# INTRO: This file should give you a guide, for you to know how many steps there are in the handshake process for creating the jwt part. That way you'll be able to know which areas you're missing, and which areas you're still weak in. The ultimate purpose is for us to be able to internalize this section.

- 1- Create a Token Key inside the environment object
- 2- Import jwt with require('jsonwebtoken')
- 3- Compare user inputed password, with hashed db existent password using bcrypt
- 4- After validating username, and email, create a token using jwt.sign() Inside the sign, include the aspects of the object you want to send the user (Do not include the password)
  LIST OF THINGS YOU CAN/SHOULD INCLUDE IN THE TOKEN
  * User Object (minus password)
  * process.env.TOKEN_KEY (the key you created inside your environment)
  * Specifications/Configuration (One that you should definitely include here is the token expiration. It should be fairly short, such as 1 hour or so)
- 5- Create the auth middleware (This will be used so you can secure routes, and they'll have to have the token, in order to be able to access protected routes)
- 6- Protect sensitive routes 
