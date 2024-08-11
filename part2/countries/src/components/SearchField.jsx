const SearchField = ({value, onChange}) => {
    return (
        <div>
            search for country: 
            <input value={value} onChange={onChange}></input>
        </div>
    )
}

export default SearchField