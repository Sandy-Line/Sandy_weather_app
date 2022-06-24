/**** Display the h1 temperature ***/

function displayCityAndTemp(response) {
  console.log(response);

  let city = document.querySelector("#city-title");
  city.innerHTML = response.data.name;

  let cityTemp = document.querySelector("#cityTemp");
  cityTemp.innerHTML = Math.round(response.data.main.temp);
}

let key = "59ebc73950183d72b027190e832e1b5b";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${key}&units=metric`;

axios.get(url).then(displayCityAndTemp);

/**** Display the forecast temperatures ***/
/* 
function displayForecast(response) {
  console.log(response);
  //console.log(response.data.list["1"]);
}

let apiKey = "59ebc73950183d72b027190e832e1b5b";
let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=3&appid=${apiKey}`;

axios.get(forecastUrl).then(displayForecast);
*/
