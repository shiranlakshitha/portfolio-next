import { model, models, Schema } from "mongoose";
import { string } from "three/tsl";

const TimeLineSchema = new Schema({
    title: string,
    year: string,
    description: string,
    category: string
})

export default models.TimeLine || model("Timeline", TimeLineSchema)

