// const jwt = require('jsonwebtoken');
//
// module.exports = (req, res, next) => {
//   // The first argument is the token being sent in by the client, the second argument is the private token we created inside our environment variable, third are options that are available to you, and that you should check out in the official jwt documentation, fourth is a callback function containing the response.
//   //The method will actually throw an error by default if it fails. We're going to use try catch block to handle such error. You should brush up on these options inside js.
//   try{
//     const token = req.headers.authorization.split(" ")[1];
//     console.log(token);
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     req.userData = decoded;
//     next();
//   } catch(error){
//     return res.status(401).json({message: 'Failed'})
//   }
//
// }
