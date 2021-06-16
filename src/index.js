const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const input_val = input.value;
  getWeather(input_val)
});

// FUNCTION THAT GETS THE WEATHER AT A CITY
function getWeather( city_name ) {
    // my api key and url to contact
    const api_key = "08ddfe32329807ca9eb30a4a85feea6d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;
    // using a fetch request to get the data
    fetch(url)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
        drawWeather(data);
        
    })
    // catch any invalid cities
    .catch(() => {
      msg.textContent = "I can't find that city! "
    });
    // reset the text box
    msg.textContent = "";
    form.reset();
    input.focus();
}
// FUNCTION TO DRAW WEATHER ON THE SCREEN   
function drawWeather( data ) {
    // farenheit / celsius toggle
    var celsuis_toggle = true
    // scraping the data from the data json into variables to display
	var celcius = Math.round(parseFloat(data.main.temp));
	var fahrenheit = Math.round((parseFloat(data.main.temp)*1.8)+32); 
	document.getElementById('description').innerHTML = data.weather[0].description;
    if (celsius_toggle = true){
        document.getElementById('temp').innerHTML = celcius + '&deg;' + 'c';
    }
    else{
        document.getElementById('temp').innerHTML = farenheit + '&deg;' + 'f';
    }
	document.getElementById('location').innerHTML = data.name;
}

// on load function to get the weather at a specific location
window.onload = function(){
    getWeather("pershore");
}