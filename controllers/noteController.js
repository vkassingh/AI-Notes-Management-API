const Note = require('../models/Note');
const { suggestNoteTags } = require('../services/geminiService'); // Import Gemini service

// Create a new note
class NoteController {
async createNote(req, res) {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
         const error = new Error("Title and Content are required.")
         error.statusCode = 404;
         throw error;
        }

        // Use Gemini to suggest tags based on note content
        const suggestedTags = await suggestNoteTags(content);

        const newNote = new Note({
            title,
            content,
            tags: suggestedTags, // Assign suggested tags
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
         next(error)
    }
};

// Get all notes
<<<<<<< HEAD
exports.getAllNotes = async (req, res,next) => {
=======
async getAllNotes(req, res){
>>>>>>> 38b0169a464cb1ae06ae53a3a2f258328f3b522c
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (error) {
       next(error)
    }
};

// Get a single note by ID
<<<<<<< HEAD
exports.getNoteById = async (req, res,next) => {
=======
async getNoteById(req, res){
>>>>>>> 38b0169a464cb1ae06ae53a3a2f258328f3b522c
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            const error = new error('Note not found')
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(note);
    } catch (error) {
        next(error) //pass error to centralized error handler
    }
};

// Update a note
<<<<<<< HEAD
exports.updateNote = async (req, res, next) => {
=======
async updateNote(req, res){
>>>>>>> 38b0169a464cb1ae06ae53a3a2f258328f3b522c
    try {
        const { title, content } = req.body;
        const updates = { title, content };

        // If content is updated, re-suggest tags
        if (content) {
            updates.tags = await suggestNoteTags(content);
        }

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            const error = new Error('Note not found')
            error.statusCode= 404;
            throw error;
        }
        res.status(200).json(updatedNote);
    } catch (error) {
       next(error) //pass error to centralized error handler
    }
};

// Delete a note
<<<<<<< HEAD
exports.deleteNote = async (req, res, next) => {
=======
async deleteNote(req, res){
>>>>>>> 38b0169a464cb1ae06ae53a3a2f258328f3b522c
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
           const error = new Error('Note not found')
           error.statusCode = 404;
           throw error;
        }
        res.status(200).json({ message: 'Note deleted successfully.' });
    } catch (error) {
        next(error) 
    }
};

}

module.exports = new NoteController; 
