import { model, models, Schema } from "mongoose";


const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    techStack : [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    }
})

export default models.ProjectSchema || model("Project", ProjectSchema)