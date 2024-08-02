const Note = ({note, toggleImportance}) => {
  const label = note.important ? 'make unimportant' : 'make important'
  return(
    <ul>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </ul>
  )
}

  export default Note