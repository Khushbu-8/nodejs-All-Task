const ProductModel = require('../models/productModel')

const addproduct = async(req,res) =>{
    try {
        const {category,name,price,description,} = req.body

        // const uploadResult = await cloudinary.uploader.upload(
        //     'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        //         public_id: 'shoes',
        //     }
        // )
        console.log( req.category )
        await ProductModel.create({
            categoryId:category,
            name:name,
            price:price,
            description:description,
        })
        res.status(200).send({
            success: true,
            message: "Product Added Successfully",

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
const viewproduct = async(req,res) =>{
    try {
        const product = await ProductModel.find({})
        // console.log(product);
        
        res.status(200).send({
            success: true,
            message: "product View Successfully",
            product

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
module.exports = {
    addproduct,
    viewproduct
}