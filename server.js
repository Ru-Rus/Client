import * as dotenv from 'dotenv'
dotenv.config();
import morgan from 'morgan'
import express from 'express';
import { nanoid } from 'nanoid';

let jobs = [
    {id:nanoid(), company: 'xxx', position: 'f-end'},
    {id:nanoid(), company: 'yyy', position: 'b-end'},
];

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


app.get('/api/v1/jobs', (req,res) => {
    res.status(200).json({jobs})
})

const port = process.env.PORT || 5100

app.listen(port, () => {
    console.log (`Running as ${port} what am i doing, SEND HELP!!`) 

})