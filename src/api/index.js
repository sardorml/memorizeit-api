import Express from 'express';

//importing our handlers for the request
import userPost from 'users/user.post.js';
import userDelete from 'users/user.delete.js';
import userGet from 'users/user.get.js';

let router = Express.Router();

//binding handler functions
router.post('/users', userPost);
router.delete('/users', userDelete);
router.get('/users/:name', userGet);
//.. and so on you get it

export default router;
