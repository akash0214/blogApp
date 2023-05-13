const express = require('express');
const { createComment } = require('../controllers/commentController');
const { createPost } = require('../controllers/postController');
const { likePost } = require('../controllers/likeController');
const router = express.Router();

router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.post('/likes/like', likePost);
module.exports = router;