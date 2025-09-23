import * as dotenv from 'dotenv'
dotenv.config();
import morgan from 'morgan'
import express from 'express';


import jobRouter from './routes/jobRouter.js'
import mongoose from 'mongoose';

const app = express();

app.use(express.json());



if (process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}



app.get('/', (req,res) => {
    res.send("Hello is the path i am taking the right path ? ")
}); 

app.post('/',(req,res) =>{
    console.log(req);
    res.json({message:'Received Payment for this illegal transactions',data: req.body})
});


app.use('/api/v1/jobs', jobRouter);


// NOT FOUND / ERROR 
app.use('*', (req,res) => {
    res.status(404).json({message: 'NOT FOUND'})
});

app.use((err,req,res,next) =>{
    console.log(err)
    res.status(500).json({message: 'SOMETHING WENT WRONG'})
})

const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
    console.log (`Running as ${port} what am i doing, SEND HELP!!`) 
});
}
catch (error){
    console.log(error);
    process.exit(1);
}




