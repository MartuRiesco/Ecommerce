const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try {
        const con= mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected');
        
    } catch (error) {
      console.log('Database error')
    };
      
}
module.exports = dbConnect