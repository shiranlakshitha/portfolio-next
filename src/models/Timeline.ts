import { model, models, Schema } from "mongoose";
import { string } from "three/tsl";

const TimeLineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default models.TimeLine || model("Timeline", TimeLineSchema)

