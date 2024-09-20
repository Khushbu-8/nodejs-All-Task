const mongoose = require('mongoose')

const connectDB = async() =>{

    try {
        
        const conn = await mongoose.connect(
           `mongodb+srv://khushbuzalavadiya8:khushbuzalavadiya8@cluster0.1behi.mongodb.net/InstaBlog-passport`
        )
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = connectDB;