const apiKey ="150dc89e4274d3dbddd2a208e85ba710";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const whetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Clouds"){
    whetherIcon.src = "cloud1.png";
  }
  else if(data.weather[0].main == "Clear"){
    whetherIcon.src = "suss.png";
  }
  else if(data.weather[0].main == "Rain"){
    whetherIcon.src = "whether-icon.png";}
  else if(data.weather[0].main == "Drizzle"){
    whetherIcon.src = "drizzle.png";
  }else if(data.weather[0].main == "Mist"){
    whetherIcon.src = "mist.png";
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});

checkWeather(city);