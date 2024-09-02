
const CrudeModule = require('../modules/CrudModel')

const ViewUser = async(req,res) =>{
    try {
        const users = await CrudeModule.find({})

return res.render('view',{
users

});
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
   
}
  
const AddUser = (req,res) =>{
    return res.render('add');
}


const insertRecord = async(req,res) =>{
    try {
        
        const {name,phone} = req.body;
        await CrudeModule.create({
            name:name,
            phone:phone
        })
        console.log("User Add");
        return res.redirect('/crud');
        
    } catch (error) {

        console.log(error);
        return false;
        
    }
}
const deleteRecord = async(req,res) =>{
    try {
        const deid = req.query.deletId
        // console.log(deid);
        await CrudeModule.findByIdAndDelete(deid);
        // console.log("User Delete");
        return res.redirect('/crud');
        
    } catch (error) {
        console.log(error);
        return false;
    }
} 

const editRecord = async(req,res) =>{
    try {
        const eid = req.query.editId;
       let single = await CrudeModule.findById(eid)
        console.log(eid);
        return res.render('edit',{
            single
        });
        
      
        
    } catch (error) {
        return false;
    }
}

const updateRecord = async(req,res) =>{
    try {
        const {name,phone,editid} = req.body;
        await CrudeModule.findByIdAndUpdate(editid,{
            name:name,
            phone:phone
        })
        console.log("User Update");
        return res.redirect('/crud');

        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = {
    ViewUser,AddUser,insertRecord,deleteRecord,editRecord,updateRecord
}