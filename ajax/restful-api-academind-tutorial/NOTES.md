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
- Uniform Interface: Resources are identified in requests, transferred data is decoupled from db schema. Also it's good to have self descriptive messages or links to further Resources.
- Code On Demand (Optional):
