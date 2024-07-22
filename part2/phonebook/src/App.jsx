import { useState } from 'react'

const Person = ({person}) => {
  return (
    <p>{person.name}</p>
  )
}

const Content = ({persons}) => {
  return (
    <div>
      {persons.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => setNewName(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    //True iff a person of that name already exists
    let exists = persons.reduce((answer, person) => person.name === newName ? true : false, false)
    console.log(exists)

    if (exists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Content persons={persons}/>
    </div>
  )
}

export default App