const mongoose = require('mongoose')
// const MongodURI = 'mongodb://localhost:27017/inotebookApp';
const MongodURI = 'mongodb+srv://send2dhammadipmendhe:PpNg0hPMIAS50Ej0@cluster0.mtwvw.mongodb.net/';

//PpNg0hPMIAS50Ej0
//mongodb+srv://send2dhammadipmendhe:PpNg0hPMIAS50Ej0@cluster0.mtwvw.mongodb.net/

const connectToMongod = async () => {
  await  mongoose.connect(MongodURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 45000, // 45 seconds
    })
        // ,()=>{
        //         console.log("connected sucessfully to database...");

        // })
        .then(() => {
            console.log("connected sucessfully to database...");
        })
        .catch((error) => {
            console.log(error);
        })
}


module.exports = connectToMongod;