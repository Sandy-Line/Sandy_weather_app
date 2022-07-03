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

function displayImg(iconUrl) {
  if (iconUrl === `http://openweathermap.org/img/wn/01d@2x.png`) {
    document.getElementById("image").src = "medias/full-sun-icon.png";
  } else if (iconUrl === `http://openweathermap.org/img/wn/02d@2x.png`) {
    document.getElementById("image").src = "medias/sun-cloud-icon.png";
  } else if (
    iconUrl === `http://openweathermap.org/img/wn/03d@2x.png` ||
    `http://openweathermap.org/img/wn/04d@2x.png`
  ) {
    document.getElementById("image").src = "medias/cloudy.png";
  } else if (iconUrl === `http://openweathermap.org/img/wn/09d@2x.png`) {
    document.getElementById("image").src = "medias/showers.png";
  } else if (iconUrl === `http://openweathermap.org/img/wn/10d@2x.png`) {
    document.getElementById("image").src = "medias/rainy.png";
  } else if (iconUrl === `http://openweathermap.org/img/wn/11d@2x.png`) {
    document.getElementById("image").src = "medias/storm.png";
  } else if (iconUrl === `http://openweathermap.org/img/wn/13d@2x.png`) {
    document.getElementById("image").src = "medias/snowy.png";
  } else if (iconUrl === `http://openweathermap.org/img/wn/50d@2x.png`) {
    document.getElementById("image").src = "medias/mist.png";
  } else {
    document.getElementById("image").src = "medias/clear.png";
  }
}

// Display the forecast
function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let forecastDay = `<div class="card-group col-12">`;
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  days.forEach(function (day) {
    forecastDay =
      forecastDay +
      `<div class="card-body">
      <div class="card-title mb-5">       
      <h5 >${day}</h5> </div>
              <img
                src="medias/cloudy.png"
                class="card-img-top mb-5"
                alt="shower-rain"
              />
              <div class="card-text">
              <h5 >13°C</h5> </div>
          </div>`;
  });

  forecastDay = forecastDay + `</div>`;
  forecast.innerHTML = forecastDay;
}

/**** Display the h1 temperature and city ***/
function displayCityAndTemp(response) {
  console.log(response);
  let city = document.querySelector("#city-title");
  city.innerHTML = response.data.name;
  let cityTemp = document.querySelector("#cityTemp");
  cityTemp.innerHTML = Math.ceil(response.data.main.temp);
  let date = document.querySelector("#date-and-hour");
  date.innerHTML = formatDate(response.data.dt * 1000);

  let image = document.querySelector("#image");
  let icon = response.data.weather["0"].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  image.setAttribute("src", iconUrl);
  displayImg(iconUrl);
}

// Send the value to the API
function searchCity(citySearch) {
  let key = "59ebc73950183d72b027190e832e1b5b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}&units=metric`;

  axios.get(url).then(displayCityAndTemp);
}

// Get the value of the input form
function handleSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#input-search");
  searchCity(citySearch.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

searchCity("Paris");
displayForecast();
