const Filter = ({filter, onFilterChange}) => {
    return (
        <form>
            search: <input value={filter} onChange={onFilterChange}/>
        </form>
    )
}

export default Filter