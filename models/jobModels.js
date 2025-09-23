import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        company: String,
        position: String,
        jobStatus:{
            type: String,
            enum:['interview', 'declined', 'pending'],
            default: 'pending',
        },
        jobType:{
            type:String,
            enum: ['full-time','part-time','intershipe'],
            default: 'full-time',
        },
        jobLocation:{
            type:String,
            default: 'my-city',
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Job', jobSchema);