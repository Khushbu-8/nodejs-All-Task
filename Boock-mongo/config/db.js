const mongoose = require('mongoose')
const connectDB = async() =>{
    try {
        
        const conn = await mongoose.connect(
            `mongodb+srv://khushbuzalavadiya8:khushbuzalavadiya8@cluster0.1behi.mongodb.net/Book-store`
        );
        console.log(`MongoDB Connected...${conn.connection.host}`);
    } catch (error) {
        console.error(error)
        return;
    }
}
module.exports = connectDB;