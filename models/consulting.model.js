import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        status: {
            type: String,
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
const Consulting = mongoose.models.Consulting || mongoose.model("Consulting", schama);

export default Consulting;