const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type : String,
    },
    noteDescription : {
        type : String,
    },
    priority : {
        type : String,
    },
    dateAdded : {
        type : Date
    },
    dateUpdated :{
        type : Date
    }
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;