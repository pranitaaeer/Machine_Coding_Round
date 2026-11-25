import mongoose from "mongoose"

const DBConnect= async()=>{
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI || "",{dbName:process.env.DBNAME})
        console.log(`db connected successfully to the ${db.connections[0].host}`)
    } catch (error) {
        console.log("err in connecting Db.")
        process.exit(1)
    }
}
export default DBConnect