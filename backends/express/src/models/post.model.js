import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users' // Reference to the User model
    },
    id: Number,
    title: String,
    body: String
  }
);

export const Post = mongoose.model('post', postSchema);
