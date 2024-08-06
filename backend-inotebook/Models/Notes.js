const mongoose = require('mongoose');

const notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true,
        unique:true
    },
    tag: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: Date.now
    }
})

module.exports = mongoose.model('user',notesSchema);