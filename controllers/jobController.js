import { nanoid } from 'nanoid';

import Job from '../models/jobModels.js'




let jobs = [
    {id:nanoid(), company: 'xxx', position: 'f-end'},
    {id:nanoid(), company: 'yyy', position: 'b-end'},
];


export const getAllJobs = async  (req,res) => {
    res.status(200).json({jobs})
};

export const createJob = async  (req,res) => {
    const {company, position} = req.body
    // if(!company){
    //     return res.status(400).json({message: 'PLEASE PROVIDE COMPANY'})
    // }
    // else if (!position){
    //      return res.status(400).json({message: 'PLEASE PROVIDE POSITION'})
    // }
    // const id = nanoid(10)
    // const job = {id,company,position};
    // jobs.push(job)

    const job = await Job.create({company,position});
    res.status(201).json({job})
};

export const getJob = async (req,res) => {
   const {id} = req.params
   const job = jobs.find((job) => job.id === id)
   if(!job){
    return res.status(404).json({msg: ` NO JOB WITH ID: ${id}`});
   }
   res.status(200).json({job});
};

export const editJob = async (req,res) => {
    const {company, position} = req.body
    if(!company){
        return res.status(400).json({message: 'PLEASE PROVIDE COMPANY'})
    }
    else if (!position){
         return res.status(400).json({message: 'PLEASE PROVIDE POSITION'})
    }
    const {id} = req.params
    const job = jobs.find((job) => job.id === id)
    if(!job){
        return res.status(404).json({msg: `NO JOB WITH ID: ${id}`});
    }
    job.company = company;
    job.position = position;
    res.status(200).json({message: 'JOB EDITED', job});
};

export const deleteJob = async  (req,res) => {
    
    const {id} = req.params
    const job = jobs.find((job) => job.id === id)
    if(!job){
        return res.status(404).json({msg: `NO JOB WITH ID: ${id}`});
    }
    const newJobs =jobs.filter((job) => job.id !== id);
    jobs = newJobs;

    res.status(200).json({message: 'JOB DELETED'});
};