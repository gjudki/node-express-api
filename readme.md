# Notes

This is code derived from "Play by Play: Building a Node Web API with Sam Artioli and John Papa
by John Papa and Sam Artioli"

Essentially, we create an 'express.js' restful service for Cats.. a few interesting things:
- running 'index.js' with 'nodemon' will auto restart the server on save
- using mongoose modeling for creating and searching records in mongo
- Uses 'body-parser' to neatly add my requested JSON object to the req.body. I don't see the immediate value of this.. need to investigate. Without this do I have to use URL encoding?
- Using Postman (chrome) for http requests
- Setting up a 'setTimeOut' on a dog route will delay the data being return from the corresponding 'pet' server route, but the 'ping' EP still returns quickly (not blocking). Lesson: keep your heavy processes on the server that the model belongs to. Local processes may be blocking.
- Redis stores everything as a flat key value pair, which is why we JSON.stringify it going in, and JSON.parse it coming out.

## Set up

- npm install
- Have Mongo set up
- Installed redis with homebrew... homebrew sucks. Start redis server with redis-server, then run redis-cli
- In the 'redis-cli', use 'keys * ' to see all stored redis keys. You can do other fancy stuff (flushdb) to clear the cache
- Installed "forever" gloabally so that I can run multiple node processes (servers) from one terminal window... but they don't auto update like with 'nodemon'
