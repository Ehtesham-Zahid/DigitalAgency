import mongoose from "mongoose";


const ServiceSceham = new mongoose.Schema({
    title: String,
    description: String,
    icon:String
})

export default mongoose.models.Service || mongoose.model("Service", ServiceSceham)