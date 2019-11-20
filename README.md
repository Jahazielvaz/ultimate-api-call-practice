## Resources
- Api Url: 'https://learnwebcode.github.io/json-example/animals-1.json'

## Challenges
- xmlhttprequests: Replicate the project inside learnwebcode. Make the api call, and have it render new material every time people click on the button. Once all 3 api calls are set, have the button disappear.

- ajax: Build an express server, and have the user input data into a field, and then have that data show up inside a container using mainly ajax, and as minimal express as possible.

------------------------------
# XMLHTTPREQUESTS/ API CALLS

## New Discoveries
- I was having an insertAdjacentHTML() is not a function bug that I couldn't fix. The reason why is because I was accessing the target element through jQuery, but this method is a js method. And you can't use js methods with jQuery methods, or vise versa.
--------------------------------
#AJAX CRUD OPERATIONS/REQUESTS


--------------------------------
#MONGO DB CONNECTION

## New Concepts
- URL Encoding and unsafe ASCII characters: Basically, there are symbols (Which might be all of them) that are not read properly by the browser in a url according to the ASCII translation. These symbols need to be replaced by their hex counterpart. These symbols include but are not limited to $ # % etc.
  Resources
  - Google Definition: URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits. URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign or with %20.
  - Page that explains this further: https://www.w3schools.com/tags/ref_urlencode.asp
- curl Command in Commandline: Apparently this helps you make api calls from your commandline. I guess developers use it to test their connections. But from what little I researched it sounds like you can do a lot more with it
  Resources
  - Page teaching about curl: http://osxdaily.com/2017/01/30/curl-post-request-command-line-syntax/
- process.env / let port = process.env.port || 3000: From what I read, this is really important for scaling your databases, and being able to connect to other servers. I don't fully know what it does, but we need to get good with this entire environment
  Resources
  - Website explaining what the environment property does and how to use it: https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7
-------------------------------------------
# AJAX 3 HEROES PROJECT
## Description
  In this project the user will be able to interact with the heroes from My Hero Academia anime to various degrees, based on an MVP process.

## MVP
### MV1
  - The only goal of mv1 is for us to pass in a index of characters with their names, stats, image urls, etc; into the database, so that then we can mess with the find() method as well as learn how to pull data down from a database,

### MV2
  - We still need to detail this section, but I'm thinking we're going to have features such as allowing the user to create their own characters with their individual quirks and have their stats be assigned through a series of randomizing features
  - I also think it'll be fun if we have users be able to type in a character's name and either get a "Character is not in index" message, or the character with all it's stats will be retrieved on the fly from the db using ajax or fetch. There are other ideas but those are good to start with for now.
