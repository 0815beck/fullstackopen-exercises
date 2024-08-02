const Note = ({note, toggleImportance}) => {
  const label = note.important ? 'make unimportant' : 'make important'
  return(
    <li>
      <div className="note">{note.content}</div>
      <div className="button-box"><button onClick={toggleImportance}>{label}</button> </div>
    </li>
  )
}

  export default Note