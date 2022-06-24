function displayPromptCityTemp(response) {
  console.log(response);
  let cityTemp = document.querySelector("#cityTemp");
  cityTemp.innerHTML = Math.round(response.data.main.temp);
}

//let cityName = prompt("Tell me a city");
let key = "59ebc73950183d72b027190e832e1b5b";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${key}&units=metric`;

axios.get(url).then(displayPromptCityTemp);
