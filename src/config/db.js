const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://KaranGond:fFipQWJWDpqjD7qt@cluster0.uftpcuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}