//TODO - Create a new Note
const NoteModel = require('../models/NotesModel');
const express = require('express');
const app = express();

//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }    
    //TODO - Write your code here to save the note
    const N = new NoteModel(req.body) 
    try{    
        await N.save();
        res.send(`<h1>DATA SAVED IN DATABASE</h1>`)
    }catch(err){
        res.status(500).send(err);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    const notes = await NoteModel.find({});
    if(notes.length == 0) {
        return res.status(400).send({
            message: "Database is empty"
        });
    }
    //TODO - Write your code here to returns all note
    else{try{
         res.send(notes)
    }catch(err){
        res.status(500).send(err);
    }}
});  

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {

    // Validate request
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const notes = await NoteModel.findById(req.params.noteId);
        res.send(notes)
   }catch{
    return res.status(400).send({
        message: `No Record associated with ID: ${req.params.noteId}`
    });
   }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    //TODO - Write your code here to update the note using noteid
    try{
        const notes = await NoteModel.findByIdAndUpdate(req.params.noteId,req.body);
        await notes.save();
        res.send(`Updated Reocrd with Id : ${req.params.noteId}`)
    }catch{
        return res.status(400).send({
            message: `No Record associated with ID: ${req.params.noteId}`
        });
       }
    });
    

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try{
        const notes = await NoteModel.findByIdAndDelete(req.params.noteId);
        res.send(`Deleted record with ID = ${req.params.noteId}`)
    }catch{
        return res.status(400).send({
            message: `No Record associated with ID: ${req.params.noteId}`
        });
       }
    });


module.exports = app