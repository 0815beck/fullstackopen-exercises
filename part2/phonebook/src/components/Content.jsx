const Person = ({person, deletePerson}) => {
    return (
        <li>{person.name} {person.number} <button onClick={deletePerson}> delete</button></li>
    )
}

const Content = ({persons, deletePersonById}) => {
    return (
        <ul>
        {persons.map(person => <Person 
            key={person.id} 
            person={person}
            deletePerson={deletePersonById(person.id)}/>)}
        </ul>
    )
}

export default Content

