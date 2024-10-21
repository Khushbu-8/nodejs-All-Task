const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
    countryId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
    },
    state :{
        type:String,
        required:true
    },
})
const state  = mongoose.model('state ',stateSchema);
module.exports = state 

