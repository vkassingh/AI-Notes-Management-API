const Note = require('../models/Note');

// Create a note
exports.createNote = async (req, res) => {
  
  
   try {

        const { title, content } = req.body;
        const note = new Note({ title, content });
        await note.save();
        res.status(201).json(note);


   } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get all notes
exports.getAllNotes = async (req, res) => {

  try {

    const notes = await Note.find().sort({ createdAt: -1 }); // Newest first
    res.json(notes);


  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};



// Get a single note by ID
exports.getNoteById = async (req, res) => {

  try {

    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    
    res.json(note);


  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a note
exports.updateNote = async (req, res) => {

    try {
       const { title, content } = req.body;
       const note = await Note.findByIdAndUpdate( req.params.id,
      { title, content, updatedAt: Date.now() },
      { new: true } // Return the updated note
    );
    if (!note) return res.status(404).json({ error: 'Note not found' });
    
    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  
  try {
    
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted successfully' });
  
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};