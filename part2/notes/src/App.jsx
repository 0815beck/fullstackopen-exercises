import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

//requests the data initially from the json-server
  useEffect(() => {
//note is used to test the error message
    const note = {
      id: 'unusedId',
      content: 'this note does not exist',
      important: true
    }
    noteService
      .getAll()
      .then(returnedNotes => {
        setNotes(returnedNotes.concat(note))
      })
  }, [])

//handles adding a new Note
//will send a POST-request to the json-server and update the local state
  const addNote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService
      .create(noteObj)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

//handles pressing the "chaning importance" buttons
  const toggleImportanceOf = id => () => {
    const note = notes.find(n => n.id == id)
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id == id ? returnedNote : n))
      })
      .catch(error => {
        setErrorMessage(`the note '${note.content}' was already deleted from the database`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

//makes sure that changes in the new-note text field are registered in the 
//newNote state-hook
  const handleNoteChange = (event) => setNewNote(event.target.value)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div className="app">
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
         {notesToShow.map(note => 
          <Note 
            note={note} 
            key={note.id} 
            toggleImportance={toggleImportanceOf(note.id)}/>
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App