import express from 'express';
const app = express();


app.get('/', (req,res) => {
    res.send("is the path i am taking the right path ? ")
}); 

app.listen(5100, () => {
    console.log ("what am i doing, SEND HELP!!")

})