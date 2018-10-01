import Express from 'express';

import APIHandler from './api/index.js';//we import our api router

const app = Express();

//redirecting all calls to /api/* to api router :
app.use('/api', APIHandler);


// Structure taken from here
// https://www.quora.com/How-would-you-do-the-folder-structure-of-a-REST-API-created-by-Node-js-Express-js-and-MySQL-MySQL-client#
