export default class NotesAPI {
    static getAllNotes() {

        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });

    }


    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id === noteToSave.id);


// Edit
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString(); 

        } else {

            noteToSave.id = Math.floor (Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);

        }





        

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));

    }


    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);
        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));



    }

    static bunkerIntegration() {
        const notes = NotesAPI.getAllNotes();
        system.interfaceMessage("notification", {"title": "Notes-app", "text": "Note Created!"});
// unfinished bunker-x integration with system.
// planned to use bunker-x to store notes using virtual file system
// bunker-x will also handle notifications and timers for the notes
// you will be able to backup-export-save-and share your notes with others.\


    console.log("wow the function actually worked");
    
    }


}