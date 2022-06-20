let currentDate = document.querySelector("#date-hour");
let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[today.getMonth()];
let date = today.getDate();
let hour = today.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let displayDate = document.querySelector("#date-hour");
displayDate.innerHTML = `${day}, ${month} ${date} at ${hour}:${minutes}`;

/*********   SHOW CURRENT TEMPERATURE OF A SUBMITTED LOCATION  ************/

function showTemperature(temperature) {
  let temp = temperature.data.main.temp;
  let city = temperature.data.name;
  let cityTitle = document.querySelector("#city-title");
  cityTitle.innerHTML = `${city}, ${Math.floor(temp)}°C`;
}

function cityDisplay(event) {
  event.preventDefault();
  let city = document.querySelector("#input-search").value;

  let url = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiKey = "59ebc73950183d72b027190e832e1b5b";
  let unit = "metric";

  axios
    .get(`${url}${city}&appid=${apiKey}&units=${unit}`)
    .then(showTemperature);
}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", cityDisplay);

/*********   SHOW CURRENT TEMPERATURE IN THE CURRENT LOCATION   ************/

function showCurrentTemp(temperature) {
  let temp = temperature.data.main.temp;
  console.log(temp);
  let city = temperature.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}, ${Math.floor(temp)}°C`;
}

function showCurrentPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "59ebc73950183d72b027190e832e1b5b";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  let unit = "metric";

  axios
    .get(`${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`)
    .then(showCurrentTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

let currentButton = document.querySelector("#current-weather");
currentButton.addEventListener("click", getCurrentLocation);
