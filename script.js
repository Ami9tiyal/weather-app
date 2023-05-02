const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c847a2fb3emsh95f4103ab4377f0p11205djsn0f2b88537210',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city)=>{

	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)
	.then(response => response.json())
	.then((response) => {
		
		
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp_1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity_1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed_1.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{

	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")