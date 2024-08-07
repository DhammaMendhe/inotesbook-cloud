const mongoose = require('mongoose')
const MongodURI = 'mongodb://localhost:27017/inotebookApp';


const connectToMongod = () => {
    mongoose.connect(MongodURI)
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