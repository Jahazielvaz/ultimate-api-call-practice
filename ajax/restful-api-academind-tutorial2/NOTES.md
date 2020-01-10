## Things to Go Over in the near future
- Model.find(): The .find() method allows you to retrieve records from the database. There are many parameters, and specifications you can add to it. Find out what stack this method belongs to, as well as how to use it properly.
- Query Operators: You can also add other query operators to the .find() method, such as where (In order to add more conditions to that query) or limit (To fetch a smaller number of records)
- select(): This one is pretty cool. Basically this method allows you to choose exactly which fields you want it to pass, and it won't pass any others. In this particular example it is being used before exec() I don't know if it always needs to be used there or not, but we definitely need to research this a little bit more. We'll want to get good with it. You use it by adding a string as a parameter with each of the properties that you want to pass
NOTE: You shouldn't put commas, or it will only return the last property you put in. You should just space them out.

## Things I've learned

### MULTER (For storing file type data)

#### Installation
- Standard require process

#### Execution
- ACTUAL CODE: const upload = multer({dest: 'uploads/'})
- HOW IT WORKS: Once you execute multer, you're ready to go, however, you can also add optional configurations, so in this case, we're adding a destination folder called uploads, which will automatically be created  if it doesn't already exist.

NOTE: Make sure you don't add an absolute path, or it'll try to create the file inside node modules and it'll crash.
