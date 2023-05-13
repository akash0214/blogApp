const express = require('express');
const { createComment } = require('../controllers/commentController');
const { createPost } = require('../controllers/postController');
const { likePost, unlikePost } = require('../controllers/likeController');
const router = express.Router();

router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost);
module.exports = router;