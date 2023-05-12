const Category = require('../models/prodcategoryModel');
const asyncHandler = require('express-async-handler');
const { validateMongodbID } = require('../utils/validateMongodbid');

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newcategory =  await Category.create(req.body);
        res.json(newcategory)
    } catch (error) {
        throw new Error(error)
    }
});

const updateCategory = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongodbID(id);
    try {
        const updatecategory =  await Category.findByIdAndUpdate(id , req.body , {
            new:true,
        });
        res.json(updatecategory)
    } catch (error) {
        throw new Error(error)
    }
});

const deleteCategory = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongodbID(id);
    try {
        const deletecategory =  await Category.findByIdAndDelete(id);
        res.json(deletecategory)
    } catch (error) {
        throw new Error(error)
    }
});

const getCategory = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongodbID(id);
    try {
        const getcategory =  await Category.findById(id);
        res.json(getcategory)
    } catch (error) {
        throw new Error(error)
    }
});

const getallCategory = asyncHandler(async (req, res) => {
    try {
        const getallcategory =  await Category.find();
        res.json(getallcategory)
    } catch (error) {
        throw new Error(error)
    }
});



module.exports = {
    createCategory ,
    updateCategory ,
    deleteCategory , 
    getCategory ,
    getallCategory ,
};