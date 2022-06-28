/**** Display the Date and time ***/

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
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
  let month = months[date.getMonth()];
  let currentDay = date.getDate();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${month} ${currentDay} at ${hours}:${minutes}`;
}

/**** Display the h1 temperature ***/

function displayCityAndTemp(response) {
  console.log(response);
  let city = document.querySelector("#city-title");
  city.innerHTML = response.data.name;
  let cityTemp = document.querySelector("#cityTemp");
  cityTemp.innerHTML = Math.round(response.data.main.temp);
  let date = document.querySelector("#date-and-hour");
  date.innerHTML = formatDate(response.data.dt * 1000);
}

let key = "59ebc73950183d72b027190e832e1b5b";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${key}&units=metric`;

axios.get(url).then(displayCityAndTemp);
