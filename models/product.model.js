import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        idCompany: {
            type: mongoose.Schema.Types.ObjectId,
        },
        name:{
            type : String
        },
        description:{
            type : String
        },
        type:{
            type : String
        },
        price:{
            type : Number
        },
        imageUrl:{
            type : String
        },
        base64Placeholder:{
            type : String
        },
        data:{
            type: Object,
        },

    },
    {
        timestamps: true,
    }
);
// schama.index({ email: 1 }, { unique: true });
// schama.index({ phone: 1 }, { unique: true });
const Product = mongoose.models.Product || mongoose.model("Product", schama);

export default Product;