const express = require('express');
const { NotExtended } = require('http-errors');
const router = express.Router();
const Post = require('./../models/Post.model');

/* GET home page */
router.get('/', (req, res) => {
  Post.find()
  .then (posts => {
    res.render('index', {posts, title: 'App created with Ironhack generator 🚀'});
  })
  .catch(error => {
    next(error);
  });
});


module.exports = router;
