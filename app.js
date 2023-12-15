const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const APIkey = 'YOUR_API_KEY';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search input[type="submit"]');

async function checkWeather(city) {
  const url = `${API_URL}q=${city}&appid=${APIkey}&units=metric`;
  const response = await fetch(url);
  var info = await response.json();

  document.querySelector('.message').style.display = 'none';

  document.querySelector('.card-title').innerHTML =
    'Weather in ' + info.name + ', ' + info.sys.country;

  document.querySelector('.text-muted').innerHTML =
    'Lat : ' + info.coord.lat + ', Lon : ' + info.coord.lon;

  document.querySelector('#weather-icon').src =
    'http://openweathermap.org/img/wn/' + info.weather[0].icon + '@2x.png';

  document.querySelector('.display-1').innerHTML =
    info.main.temp + '<sup>o</sup>C';

  document.querySelector('.text-muted-2').innerHTML =
    'Feels like' +
    info.main.feels_like +
    '<sup>o</sup>C' +
    '<br> <br>' +
    info.weather[0].description;

  document.querySelector('.detail ul li:nth-child(1)').innerHTML =
    '<i class="bx bx-paper-plane"></i>' + info.main.pressure + 'mb';

  document.querySelector('.detail ul li:nth-child(2)').innerHTML =
    '<i class="bx bx-wind"></i>' + info.wind.speed + ' m/s';

  document.querySelector('.detail ul li:nth-child(3)').innerHTML =
    '<i class="bx bx-cloud"></i>' + info.clouds.all + ' %';

  document.querySelector('.detail ul li:nth-child(4)').innerHTML =
    '<i class="bx bx-low-vision"></i>' + info.visibility / 1000 + ' km';

  document.querySelector('.detail ul li:nth-child(5)').innerHTML =
    '<i class="bx bx-droplet-half"></i>' + info.main.humidity + ' %';

  document.querySelector('.detail-box').style.display = 'block';
  document.querySelector('.detail').style.display = 'block';
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
