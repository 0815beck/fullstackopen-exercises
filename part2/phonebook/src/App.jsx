import { useState } from 'react'
import Form from './components/Form'
import Content from './components/Content'
import Filter from './components/Filter'

const App = () => {

//state of the application
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

//event handling functions  
  const personsToShow = 
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilterChange = event => setNewFilter(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
    //First check if a person of that name is already in the phonebook
    let exists = persons.reduce((answer, person) => person.name === newName ? true : false, false)
    if (exists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    //if not, add a new entry to the persons array
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

//application structure
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <h2>Add a new entry</h2>
      <Form 
        onSubmit={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Content persons={personsToShow}/>
    </div>
  )
}

export default App