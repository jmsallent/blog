import { Router } from 'express';
import { Post } from "../models/post.model.js"

export const routes = new Router();

// Add routes
routes.get('/', async (req, res) => {
  const posts = await Post.find().limit(5);
  res.render('index', {posts});
});

routes.get('/posts', function(req, res) {
  
  res.render('post');
});

routes.get('/post/:id', async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findOne({id : postId});
  console.log(post)
  res.render('post');
});