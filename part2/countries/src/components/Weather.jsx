const Weather = ({weather}) => {

    if (weather === null) {
        return null
    }

    const iconCode = weather.weather[0].icon
    const iconAlt = weather.weather[0].description

    return (
        <div>
            <h2>weather in {weather.name}</h2>
            <div>temperature: {weather.main.temp} °C</div>
            <img 
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt= {iconAlt} />
            <div>wind speed: {weather.wind.speed} km/h</div>
        </div>
    )
}

export default Weather