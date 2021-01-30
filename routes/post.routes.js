const express = require('express');
const router = express.Router();
const routeGuard = require('../configs/route-guard.config');
const uploadMiddleware = require('./../middlewares/file-upload');
const Post = require('./../models/Post.model');
///////////////////////////////////////////////////////////////////////

/* GET post crete page */
router.get('/create', routeGuard, (req, res, next) => {
  res.render('posts/create');
});

router.post('/create', routeGuard, uploadMiddleware.single('image'), (req, res, next) => {
  const { content, picName } = req.body;

  if (content === '') {
    res.render('posts/create', {
      errorMessage: 'Content cannot be empty.'
    });
    return;
  }

  let image;
  if (req.file) {
    image = req.file.path;
  }

  Post.create({
    content,
    picName,
    picPath: image,
    creatorId: req.session.currentUser._id
  })
    .then(post => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .then(post => {
      res.render('posts/post-details', { post });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
