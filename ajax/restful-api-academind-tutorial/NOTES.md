# RESTFUL API CONCEPTS

## Intro
Rest or Restful stands for Representational State Transfer.

## How it works
- The purpose of a restful api is for requests to be made between the restful server and the client (The browser) to transfer simple data back and forth, and have both parties use the data as they please, as opposed to transferring html files and rendering it like the browser normally does
- The requests in a restful api are usually not created by the actual user, but rather they are created behind the scenes between the server and the browser, or other servers as well.

## Restful api constraints (The guidelines it needs to follow in order to be a restful api)
- Client Server Architecture: Separation of concerns, meaning our restful api should not care about the ui or application requesting it
- Stateless: No client-context (or session) is stored on the server. It doesn't care about what or how many clients are connecting to it. It doesn't store anything that binds it to a specific application or client.
- Cacheability: Responses must define themselves as cacheable or not cacheable.
- Layered System: Restful api allows for intermediate servers to be able to interact with the client, without the client ever knowing about it. I believe this is useful for security purposes. This in between server could be used to forwards requests or send responses, etc instead of the original server. We don't give the guarantee that our restful api is the final point of the request.
- Uniform Interface: Resources are identified in requests, transferred data is decoupled from db schema. Also it's good to have self descriptive messages or links to further Resources. For example, if you were going to make a request for users, you would need to send the response with the list of users, as well as give the client the links/resources, so that they could make another request to actually view the data within the target user since in the case the user won't be interacting with the data directly.
- Code On Demand (Optional): This means we could also transfer executable code, or in other words, it doesn't have to be just data. We can also send the client code that the client can execute.
- IMPORTANT: Note that these concepts are merely suggestive. Not all restful apis need to have all of these aspects together. However, the most important concept is definitely stateless. Sessions shouldn't be stored. The api shouldn't have any relation to the client connecting to it.

## Things I need to improve on massively
- Error handling: I really don't know how the error object works, and all these ways to handle errors, I'm not even sure I know what the use of it is. Everything seems to be working without it, so I don't fully know.
- Writing Cors Headers, and headers in general.

## Names of Headers Related to Access Control
- res.header("Access-Control-Allow-Origin", "http/the-chosen-urlname.com") : This grants cors access the the specified url. If you want all urls to have access, then you just need to specify " * "
- res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization") : Here, you're specifying which types of headers your api accepts. Again, if you want any type of header to be given to you as a response, then simply specify it with " * "
- res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"): This header sets the kind of requests your api accepts.

## Things to explore further
- Handling CORS headers: Learn the different header options, and how to execute them. Make it a habit to always use it in your restful apis
- req.method : Research this and how it works, and how you can use it. Remember that the browser will always send an options request first when you send a post request, or a put request. Here the browser sees if it can make that request happen.
- Writing Restful Api Documentation: Learn the proper way to write it, and the kind of content you need to have, and make it a habit to write it for all your apis.
- next(): While I do understand a bit about the concept of the next() method in middleware, I'm still not clear as to when to use it, and why I don't always need to use it. Research this method further and make sure that you're crystal clear as to how it works and when to use it.
- IMPORTANT - process.env Storing Data: This allows you to store sensitive data, and access it in a safe manner without the risk of man in the middle attacks that could take your passwords, or get admin passwords. Research this a little bit more, so you can figure out exactly how it works, and exactly how to use it.
- nodemon.json File: Apparently this file allows you to configure the environment variables. Explore this a little bit more and find out exactly what it does and how it works. 
