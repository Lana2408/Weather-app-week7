function formateDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
    hours = `0${minutes}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}


function displayTemperature(responce) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

temperatureElement.innerHTML = Math.round(responce.data.main.temp);
cityElement.innerHTML = responce.data.name;
descriptionElement.innerHTML = responce.data.weather[0].description;
humidityElement.innerHTML = responce.data.main.humidity;
windElement.innerHTML = Math.round(responce.data.wind.speed);
dateElement.innerHTML = formateDate(responce.data.dt * 1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", responce.data.weather[0].description);

}

function search(city) {
  let apiKey = "d4cf6a64528c35bcb21c2761bd709af2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}


function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

search("Kyiv");

  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);



