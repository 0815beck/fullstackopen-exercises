import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Content from './components/Content'
import Filter from './components/Filter'

const App = () => {

//state of the application
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

//request initial value for persons from the json server
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log('got data from server')
      })
  }, [])

  
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
//if not, use POST to send a new entry to the server
//and update the local persons array
    const personObj = {
      name: newName,
      number: newNumber,
    }
    axios
      .post('http://localhost:3001/persons', personObj)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
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