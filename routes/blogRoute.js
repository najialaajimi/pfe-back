const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlog, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require('../controller/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadimages');
const router = express.Router();


router.post('/', authMiddleware , isAdmin , createBlog);
router.put('/upload/:id' , authMiddleware , isAdmin , 
uploadPhoto.array('images',2),
blogImgResize,
uploadImages);
router.put('/likes', authMiddleware , likeBlog);
router.put('/dislikes' , authMiddleware ,dislikeBlog);

router.put('/:id', authMiddleware , isAdmin , updateBlog);
router.get('/:id'/* ,authMiddleware , isAdmin */ , getBlog);
router.get('/', getAllBlog);
router.delete('/:id', authMiddleware , isAdmin , deleteBlog);



module.exports = router;