// const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;



const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true,
        unique: true
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

const User = mongoose.model('notes', notesSchema);
module.exports = User;