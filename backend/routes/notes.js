const express = require('express');
const Note = require('../models/Note');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
     body,
     validationResult
} = require('express-validator');

router.get('/fetchallnotes', fetchuser, async (req, res) => {
     const notes = await Note.find({
          user: req.user.id
     });
     res.json(notes);
})

router.post('/addnote', fetchuser, [
     body('title', 'Please Enter minimum 3 letters ').isLength({
          min: 3
     }),
     body('description', 'Description must be atleast 5 letters').isLength({
          min: 5
     }),
], async (req, res) => {
     try {
          const { title, description, tag } = req.body;
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({
                    errors: errors.array()
               });
          }
          const note = new Note({
              title, description, tag, user: req.user.id
         })
         const savedNote  =    await note.save();
          res.json(savedNote);
     } catch (error) {
          console.log(error);
          return res.status(500).json({
               error: 'Server error'
          });
     }

})
router.put('/updatenote/:id', fetchuser, async (req, res) => {
     let success = false;
     try {
          const { title, description, tag } = req.body;
          const updateNote = {};
          if (title) { updateNote.title = title }
          if (description) { updateNote.description = description }
          if (tag) { updateNote.tag = tag }
          const note = await Note.findById(req.params.id);
          if (!note) {
              return res.status(404).send(success,'not found !');
          } 
          if ( String (note.user) !== req.user.id ) {
               return res.status(401).send(success,"Not Allowed");
          }
          // Find note is exists or not first 
          const noteupdate = await Note.findByIdAndUpdate(req.params.id, { $set: updateNote }, { new: true });
         // res.json({noteupdate})
          success = true;
         res.status(200).send(success,req.params.id);
     } catch (error) {
      return res.status(500).json({
          errors: 'Server error'
      })
 
 }
});

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
     let success = false;
     try {
          if (!req.params.id) {
               return res.status(404).send(success,"Incomplated infromation. Not allowed");
          }
          const note = await Note.findById(req.params.id);
         if (!note) {
               return res.status(404).send(success,"Not Found");
          }
          if (String(note.user) !== req.user.id) {
               return res.status(401).send(success,"Not Allowed")
          }
          notedelete = await Note.findByIdAndDelete(req.params.id);
          success = true;
          res.json({ success, "response": "Note has been Deleted" , note : notedelete })
          
     } catch (error) {
          success = false;
          return res.status(500).json({ success,error: "Server error" });
     }
     
})


module.exports = router