import Weather from './Weather'

const Information = ({country, weather}) => {

    if (country === null) {
        return null
    }

    const languages = [] 

    for (const key in country.languages) {
        languages.push(country.languages[key])
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>common name: {country.name.common}</div>
            <div>official name: {country.name.official}</div>
            <div>capital: {country.capital[0]}</div>
            <div>languages: {languages.join(', ')}</div>
            <div>
                <img 
                    src={country.flags.png}
                    alt={country.flags.alt}
                />
            </div>
            <Weather
                weather={weather}
            />
        </div>
    )
}

export default Information