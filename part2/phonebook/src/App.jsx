import { useState } from 'react'

const Person = ({person}) => {
  return (
    <p>{person.name} {person.number}</p>
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
    { name: 'Arto Hellas', number: '012-345678-93' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    //First check if a person of that name is already in the phonebook
    let exists = persons.reduce((answer, person) => person.name === newName ? true : false, false)
    if (exists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const personObj = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <Content persons={persons}/>
    </div>
  )
}

export default App