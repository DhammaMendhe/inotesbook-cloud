const express = require("express");
const connectToMongod = require('./db')
const app = express();
const PORT = 5000 ;

// const user

connectToMongod();
app.use(express.json());


//app.use() is used to connect middlware to join path

app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

//middleware using for handle the json file



// app.get('/',(req,res)=>{
//     // res.send("get request is gooing")
   
// })

app.listen(PORT,()=>{
    console.log(`connected to ${PORT} successfully...`)
})