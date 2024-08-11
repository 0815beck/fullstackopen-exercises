const Entry = ({name, onClick}) => {
    return (
        <li>{name.common} <button
        onClick={onClick}>show details</button></li>
    )
}

const SearchResult = ({filter, names, handleClicks}) => {
    if (filter === '') {
        return null
    }
    if (names.length > 10) {
        return (<div>too many results. be more specific</div>)
    }
    return (
        <div><ul>{names.map(name => 
        <Entry 
            name={name}
            key={name.common}
            onClick={handleClicks(name.common)}
        />)}
        </ul></div>
    )
}

export default SearchResult