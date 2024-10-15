const CategoryModel = require('../models/categoryModel')

const addcategory = async(req,res) =>{
    try {
        const {category} = req.body;
        // console.log( req.category )
        await CategoryModel.create({
            category:category
        })
        res.status(200).send({
            success: true,
            message: "category Added Successfully"

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
const viewcategory = async(req,res) =>{
    try {
        const category = await CategoryModel.find({})
        // console.log(category);
     
        res.status(200).send({
            success: true,
            message: "category View Successfully",
            category

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
module.exports = {
    addcategory,
    viewcategory
}