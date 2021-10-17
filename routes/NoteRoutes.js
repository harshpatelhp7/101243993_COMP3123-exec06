//TODO - Create a new Note
const NoteModel = require('../models/NotesModel');
const express = require('express');
const { mongoose } = require('mongoose');
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
        res.send(N);
    }catch(err){
        res.status(500).send(err);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    try{
         res.send(N.find({}))
    }catch(err){
        res.status(500).send(err);
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    
});

    

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
});
module.exports = app