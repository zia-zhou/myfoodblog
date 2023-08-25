const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  // Find users with the role 'admin'
  const adminUsers = await User.find({ role: 'admin' });

  // Collect user IDs of admin users
  const adminUserIds = adminUsers.map(user => user._id);

  // Fetch posts from admin users and sort by creation date
  const posts = await Post.find({ user: { $in: adminUserIds } })
    .sort({ createdAt: 'asc' })
    .exec();

  res.status(200).json(posts);
});

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setPost = asyncHandler(async (req, res) => {
   // Check if the user making the request is an admin
   if (req.user.role !== 'admin') {
    res.status(403); // Forbidden
    throw new Error('Only users with role "admin" can create posts');
  }
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const post = await Post.create({
    title:req.body.title,
    text: req.body.text,
    user: req.user.id,
    
    
  })

  res.status(200).json(post)
})

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  const stringUser = "" + post.user
  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the post user
  if (stringUser !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPost)
})

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const stringUser = "" + post.user
  // Make sure the logged in user matches the post user
  if (stringUser !== req.user.id) {

    
    res.status(401)
    throw new Error('User not authorized')
  }

  await await Post.deleteOne(post)

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
}