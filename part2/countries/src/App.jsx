import { useState, useEffect } from 'react'
import axios from 'axios'
import Information from './components/Information'
import SearchResult from './components/SearchResult'
import SearchField from './components/SearchField'

const App = () => {

//country data comes from here:
  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

//STATE HOOKS AND RELATED STUFF -----------------------------------------------------------

//names contains a list of all the names fetched from the countries api  
  const [names, setNames] = useState([])
//get the list when the application starts
  useEffect(() => {
    axios
      .get(`${baseUrl}/all`)
      .then(response => {
        setNames(response.data.map(entry => entry.name))
      })
  }, [])
//filter remembers the state of the search bar at the top of the page  
  const [filter, setFilter] = useState('')
//a filtered version of the names list. if it is short enough, then it is shown
//below the search bar with the option to expand a country for further details
  const filteredNames = names
    .filter(name => (
        name.common.toLowerCase().includes(filter.toLowerCase()) || 
        name.official.toLowerCase().includes(filter.toLowerCase())
      )
    )
//the country that is actually shown in the information component
  const [country, setCountry] = useState(null)
//weather information from the country displayed in the information component
//fetched from a call to the REST-api of openweathermap.org
  const [weather, setWeather] = useState(null)

//EVENT HANDLERS -------------------------------------------------------------------------
  const handleFilterChange = event => setFilter(event.target.value)

  const showDetailsByCommonName = (commonName) => () => {
    
    const apiKey = import.meta.env.VITE_SOME_KEY
    const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

    axios
      .get(`${baseUrl}/name/${commonName}`)
      .then(response => {
        console.log(response)
        const data = response.data
        const capital = data.capital[0]
        setCountry(data)
        return axios.get(`${apiBaseUrl}q=${capital}&appid=${apiKey}&units=metric`)
      })
      .then(response => {
        console.log(response)
        setWeather(response.data)
      })
      .catch(error => console.log(error))
  }

//APPLICATION STRUCTURE ----------------------------------------------------------
  return (
    <div>
      <SearchField
        value={filter}
        onChange={handleFilterChange} />
      <SearchResult 
        filter={filter}
        names={filteredNames} 
        handleClicks={showDetailsByCommonName} />
      <Information 
        country={country}
        weather={weather} />
    </div>
  )
}

export default App
