import { useState, useEffect } from 'react'
import Form from './components/Form'
import Content from './components/Content'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {

//STATE HOOKS --------------------------------------------------

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

//request initial data for the persons-array from the json-server
  useEffect(() => {
    personService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
        console.log('got data from the server')
      })
  }, [])

  const personsToShow = 
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

//EVENT HANDLING FUNCTIONS ------------------------------------------    

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)
  
  const handleFilterChange = event => setNewFilter(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
    let exists = persons.reduce((answer, person) => person.name === newName ? true : false, false)
    if (exists) {
      let person = persons.find(p => p.name == newName)
      let newPerson = { ...person, number: newNumber }
      let msg = `${person.name} is already in the phonebook, replace the old number with a new one?`
      if (window.confirm(msg)) {
        personService
          .update(person.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }
    const personObj = {
      name: newName,
      number: newNumber,
    }
    personService
      .create(personObj)
      .then(returnedObj => {
        setPersons(persons.concat(returnedObj))
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePersonById = id => () => {
    const name = persons.find(person => person.id == id).name
    if (window.confirm(`'${name}' will be deleted from the phonebook.`)) {
      personService
      .deleteById(id)
      .then(deletedPerson => {
        console.log(deletedPerson)
        setPersons(persons.filter(person => person.id !== deletedPerson.id))
      })
    }
  }

//THE APPLICATION ------------------------------------------------

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
      <Content 
        persons={personsToShow}
        deletePersonById={deletePersonById}
      />
    </div>
  )
}

export default App