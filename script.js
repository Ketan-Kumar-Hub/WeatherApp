function getWeather() {
    let city = document.getElementById("cityInput").value;
    let apiKey = "ed0d14229f192626c7cb50229feb0a2d"; // Replace with your OpenWeatherMap API Key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => console.log("Error fetching weather data:", error));
}
