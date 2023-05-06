const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 25,
        },
        body: {
            type: String,
            required: true,
            maxLength: 200,
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like",
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }]
    }
);