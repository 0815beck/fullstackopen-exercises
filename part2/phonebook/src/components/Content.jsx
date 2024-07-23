const Person = ({person}) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}

const Content = ({persons}) => {
    return (
        <div>
        {persons.map(person => <Person key={person.id} person={person}/>)}
        </div>
    )
}

export default Content

