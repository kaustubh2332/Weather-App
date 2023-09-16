const apiKey = "4a55b018d2fe56cccced69b8068d5fd0";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");
async function checkWeather(city)
{
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
if(data.weather[0].main=="Clouds")
{
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear")
{
    weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Drizzle")
{
    weatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Humidity")
{
    weatherIcon.src="images/humidity.png";
}
else if(data.weather[0].main=="Mist")
{
    weatherIcon.src="images/mist.png";
}
else if(data.weather[0].main=="Rain")
{
    weatherIcon.src="images/Rain.png";
}

else if(data.weather[0].main=="Snow")
{
    weatherIcon.src="images/snow.png";
}

else if(data.weather[0].main=="Wind")
{
    weatherIcon.src="images/wind.png";
}
document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);

})
