import mongoose from "mongoose";

const QuerySceham = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
})

export default mongoose.models.Query || mongoose.model("Query", QuerySceham)