function displayTemperature(responce) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round(responce.data.main.temp);
cityElement.innerHTML = responce.data.name;
descriptionElement.innerHTML = responce.data.weather[0].description;
humidityElement.innerHTML = responce.data.main.humidity;
windElement.innerHTML = Math.round(responce.data.wind.speed);
}

  let apiKey = "d4cf6a64528c35bcb21c2761bd709af2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);



