
var key = "d4be918060a98b7864c9238d893afb0a";
var http = new XMLHttpRequest();
var method ="GET";
var city = document.getElementById("weatherCity");
var weatherbox = document.getElementById("weather");
function todo(){
var cityname = document.getElementById("city").value;
console.log(cityname);
var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+key+"&units=metric";

  http.open(method,url);
  http.send();
  http.onreadystatechange = function(){
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200)
    {
      weatherbox.style.display = 'block';
        var description = JSON.parse(http.responseText).weather[0].description;
        var temp = JSON.parse(http.responseText).main.temp+" C";
        city.textContent = cityname; 
        weatherDescription.textContent=description;
        weatherTemperature.textContent = temp;
        
    } 
    else if(http.readyState === XMLHttpRequest.DONE && http.status != 200){
      alert("Plesae enter a proper city")
    }
}
};




