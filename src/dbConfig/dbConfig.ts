import mongoose from "mongoose";

const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection

        connection.on("connected", ()=> {
            console.log("MongoDB Connection Successful")
        })
        connection.on("error", (err) => {
            console.log("MongoDB Connection Failed : ", err);
            process.exit(1);
        })

    } catch (error: any){
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB;