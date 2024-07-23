const Filter = ({filter, onFilterChange}) => {
    return (
        <form>
            filter shown with <input value={filter} onChange={onFilterChange}/>
        </form>
    )
}

export default Filter