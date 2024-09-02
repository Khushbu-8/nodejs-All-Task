const mongoose = require("mongoose")

const crudeSchema = mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})
const user = mongoose.model("user", crudeSchema);
module.exports = user