import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        // cId: mongoose.Schema.Types.ObjectId,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
        },
        title: {
            type: String,
            // required: true,
        },
        description: {
            type: String,
            // unique: true,
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