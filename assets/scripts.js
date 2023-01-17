var searchBtn = document.querySelector("#search-button");
var city = document.querySelector("#city"); 
var historyList = document.querySelector("#history-list");
var layout = document.querySelector("section");
var searchForm = document.querySelector("#search-form")
var datefull;

// Search Button and functions to be called when clicked __________________________________________
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    renderHistory();
    search();
    
});


// Create History List under the search Button _________________________________________________
var cities = [];

var savedHistory = localStorage.getItem("cities")

console.log(JSON.parse(savedHistory))

savedHistory = JSON.parse(savedHistory)

for (var i = 0; i < savedHistory.length; i++) {
  var toDo = savedHistory[i];
  var li = document.createElement("li");
  
  li.textContent = toDo;
  li.setAttribute("data-index",i);       
  historyList.appendChild(li); 
}

cities = savedHistory;

function renderHistory() {
    // Adds the inputField to the array
    var inputField = city.value.trim();
    if (inputField == null || inputField == "") {
      return;
    } if (!cities.includes(inputField)) {
      cities.push(inputField)
    }

  localStorage.setItem("cities",JSON.stringify(cities));

    // Adds a new item list when new item in the array after click  
    historyList.innerHTML = "";
    for (var i = 0; i < cities.length; i++) {
        
        var todo = cities[i];
        var li = document.createElement("li");
        
        li.textContent = todo;
        li.setAttribute("data-index",i);       

        historyList.appendChild(li); 


// setting the side screen to appear _____________________
layout.setAttribute("class", "show");
}};
// Create History List under the search Button _________________________________________________


var APIKey = "794142a626ce62e5a3897b2a34ca54fe";

  function fetchWeather(city) {
    console.log(city);
    // fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.APIKey)
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=794142a626ce62e5a3897b2a34ca54fe")

  .then((response) => response.json())
  .then((data) => {
    this.displayCurrentWeather(data)
    this.displayWeatherDay1(data)
    this.displayWeatherDay2(data)
    this.displayWeatherDay3(data)
    this.displayWeatherDay4(data)
    this.displayWeatherDay5(data)
  })
};


function displayCurrentWeather(data) {
  var { name,country } = data.city;
  var { icon } = data.list[0].weather[0];
  var { temp, humidity } = data.list[0].main;
  var { speed } = data.list[0].wind;
  var {dt_txt} = data.list[0];
console.log(dt_txt,name,country,icon,temp,humidity,speed);

var cityName = document.querySelector("#city-name");
var cityTemp = document.querySelector("#city-temp");
var cityWind = document.querySelector("#city-wind");
var cityHumidity = document.querySelector("#city-humidity");
var imgWeather = document.querySelector("#img-weather");

cityName.textContent = name + ", " + country ;
cityTemp.textContent = Math.round(temp) + " °C";
cityWind.textContent = "Wind Speed: " + Math.round(speed*10)/10 + " km/h";
cityHumidity.textContent = "Humidity: " + Math.round(humidity) + " %";;
imgWeather.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};


function displayWeatherDay1(data) {
  var cityDate1 = document.querySelector("#date-day1");
  var cityTemp1 = document.querySelector("#temp-day1");
  var cityWind1 = document.querySelector("#wind-day1");
  var cityHumidity1 = document.querySelector("#humi-day1");
  var imgWeather1 = document.querySelector("#img-weather-day1");
  var { icon } = data.list[8].weather[0];
  var { temp, humidity } = data.list[8].main;
  var { speed } = data.list[8].wind;
  var {dt_txt} = data.list[8];

  var day = dt_txt.slice(8,10);
  var year = dt_txt.slice(0,4);
  var mounth = dt_txt.slice(5,7);
  var datefull = day + "/" + mounth + "/" +  year;

cityDate1.textContent = datefull;
cityTemp1.textContent = Math.round(temp) + " °C";
cityWind1.textContent = "Wind Speed: " + Math.round(speed*10)/10 + " km/h";
cityHumidity1.textContent = "Humidity: " + Math.round(humidity) + " %";;
imgWeather1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};


function displayWeatherDay2(data) {
  var cityDate2 = document.querySelector("#date-day2");
  var cityTemp2 = document.querySelector("#temp-day2");
  var cityWind2 = document.querySelector("#wind-day2");
  var cityHumidity2 = document.querySelector("#humi-day2");
  var imgWeather2 = document.querySelector("#img-weather-day2");


  var { icon } = data.list[16].weather[0];
  var { temp, humidity } = data.list[16].main;
  var { speed } = data.list[16].wind;
  var {dt_txt} = data.list[16];
console.log(dt_txt,icon,temp,humidity,speed);

var day = dt_txt.slice(8,10);
var year = dt_txt.slice(0,4);
var mounth = dt_txt.slice(5,7);
var datefull = day + "/" + mounth + "/" +  year;

cityDate2.textContent = datefull;
cityTemp2.textContent = Math.round(temp) + " °C";
cityWind2.textContent = "Wind Speed: " + Math.round(speed*10)/10 + " km/h";
cityHumidity2.textContent = "Humidity: " + Math.round(humidity) + " %";;
imgWeather2.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};


function displayWeatherDay3(data) {
  var cityDate3 = document.querySelector("#date-day3");
  var cityTemp3 = document.querySelector("#temp-day3");
  var cityWind3 = document.querySelector("#wind-day3");
  var cityHumidity3 = document.querySelector("#humi-day3");
  var imgWeather3 = document.querySelector("#img-weather-day3");
  var { icon } = data.list[24].weather[0];
  var { temp, humidity } = data.list[24].main;
  var { speed } = data.list[24].wind;
  var {dt_txt} = data.list[24];

var day = dt_txt.slice(8,10);
var year = dt_txt.slice(0,4);
var mounth = dt_txt.slice(5,7);
var datefull = day + "/" + mounth + "/" +  year;

cityDate3.textContent = datefull;
cityTemp3.textContent = Math.round(temp) + " °C";
cityWind3.textContent = "Wind Speed: " + Math.round(speed*10)/10 + " km/h";
cityHumidity3.textContent = "Humidity: " + Math.round(humidity) + " %";;
imgWeather3.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};


function displayWeatherDay4(data) {
  var cityDate4 = document.querySelector("#date-day4");
  var cityTemp4 = document.querySelector("#temp-day4");
  var cityWind4 = document.querySelector("#wind-day4");
  var cityHumidity4 = document.querySelector("#humi-day4");
  var imgWeather4 = document.querySelector("#img-weather-day4");
  var { icon } = data.list[32].weather[0];
  var { temp, humidity } = data.list[32].main;
  var { speed } = data.list[32].wind;
  var {dt_txt} = data.list[32];

var day = dt_txt.slice(8,10);
var year = dt_txt.slice(0,4);
var mounth = dt_txt.slice(5,7);
var datefull = day + "/" + mounth + "/" +  year;

cityDate4.textContent = datefull;
cityTemp4.textContent = Math.round(temp) + " °C";
cityWind4.textContent = "Wind Speed: " + Math.round(speed*10)/10 + " km/h";
cityHumidity4.textContent = "Humidity: " + Math.round(humidity) + " %";;
imgWeather4.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};


function displayWeatherDay5(data) {
  var cityDate5 = document.querySelector("#date-day5");
  var cityTemp5 = document.querySelector("#temp-day5");
  var cityWind5 = document.querySelector("#wind-day5");
  var cityHumidity5 = document.querySelector("#humi-day5");
  var imgWeather5 = document.querySelector("#img-weather-day5");
  var { icon } = data.list[39].weather[0];
  var { temp, humidity } = data.list[39].main;
  var { speed } = data.list[39].wind;
  var {dt_txt} = data.list[39];

var day = dt_txt.slice(8,10);
var year = dt_txt.slice(0,4);
var mounth = dt_txt.slice(5,7);
var datefull = day + "/" + mounth + "/" +  year;

cityDate5.textContent = datefull;
cityTemp5.textContent = Math.round(temp) + " °C";
cityWind5.textContent = "Wind Speed: " + Math.round(speed*10)/10 + " km/h";
cityHumidity5.textContent = "Humidity: " + Math.round(humidity) + " %";;
imgWeather5.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};


function search() {
this.fetchWeather(city.value); 
};