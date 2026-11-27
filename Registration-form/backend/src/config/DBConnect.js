
import mongosose from "mongoose"

const DBConnect=async()=>{
    try {
        const Db=await mongosose.connect(process.env.MONGO_URI || "",{dbName:process.env.DBNAME})
        console.log(`database connected successfully to ${Db.connections[0].host}`)
    } catch (error) {
        console.log("err in connecting db",error.message)
        process.exit(1)
    }
}
export default DBConnect