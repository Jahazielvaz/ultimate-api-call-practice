# RESTFUL API CONCEPTS

## Intro
Rest or Restful stands for Representational State Transfer.

## How it works
- The purpose of a restful api is for requests to be made between the restful server and the client (The browser) to transfer simple data back and forth, and have both parties use the data as they please, as opposed to transferring html files and rendering it like the browser normally does
- The requests in a restful api are usually not created by the actual user, but rather they are created behind the scenes between the server and the browser, or other servers as well.

## Restful api constraints (The guidelines it needs to follow in order to be a restful api)
- Client Server Architecture: Separation of concerns, meaning our restful api should not care about the ui or application requesting it
- Stateless: No client-context (or session) is stored on the server. It doesn't care about what or how many clients are connecting to it. It doesn't store anything that binds it to a specific application or client.
- Cacheability:
- Layered System:
- Uniform Interface:
- Code On Demand (Optional): 
