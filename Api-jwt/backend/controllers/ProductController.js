const ProductModel = require('../models/productModel');
const subcategory = require('../models/subcategoryMolel');
const cloudinary = require('cloudinary').v2;

const addproduct = async (req, res) => {
    try {
        // console.log(req.body.category);
        const { category,subcategory, product, price, description } = req.body;
        // console.log(req.file.path);
        console.log(req.body);
        
        
        // const imageUpload = await cloudinary.uploader.upload(req.file.path);
        // console.log(imageUpload);
        
       
        if (!category ||!subcategory ||!product || !price || !description) {
            return res.status(400).send({
                success: false,
                message: "All fields (category, name, price, description) are required."
            });
        }
    
        await ProductModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            product: product,
            price: price,
            description: description,

        })
        res.status(200).send({
            success: true,
            message: "product Added Successfully"

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
const viewproduct = async (req, res) => {
    try {
        const products = await ProductModel.find({}).populate('categoryId').populate('subcategoryId');
        res.status(200).send({
            success: true,
            message: "product fetch Successfully",
            products

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}

const deleteproduct = async(req,res) =>{
    try {
        let id = req.query.id;
        // console.log(id);
        await ProductModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "product Delete Successfully"
        })     
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })   
    }
}

module.exports = {
    addproduct,viewproduct,deleteproduct
}