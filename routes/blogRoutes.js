const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router();

//create new blog
router.get('/create', blogController.blog_create);
//home route
router.get('/', blogController.blog_home)
//post data to database
router.post('/', blogController.blog_create_post);
//open blog details
router.get('/:id', blogController.blog_details)
//delete blog
router.delete('/:id', blogController.blog_delete);



module.exports = router;