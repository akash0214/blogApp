const express = require('express');
const { createComment } = require('../controllers/commentController');
const { createPost } = require('../controllers/postController');
const router = express.Router();

router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
module.exports = router;