const apiKey = "cf2fc44ebd3f1aba9c96a3248d199561";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        const weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
             
             //if city is is incorrect then he will display msg
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }else{
                var data = await response.json();

            console.log(data);

            //update the website data from api data

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + ("°C"); //math.round() it will return the pointer data into integer
            document.querySelector(".humidity").innerHTML=data.main.humidity + (" %");
            document.querySelector(".wind").innerHTML=data.wind.speed + (" km/h");

            if(data.weather[0].main == "Clouds"){
               weatherIcon.src = "images/clouds.png";
            }else if(data.weather[0].main == "Clear"){
               weatherIcon.src = "images/clear.png";
            }else if(data.weather[0].main == "Rain"){
               weatherIcon.src = "images/rain.png";
            }else if(data.weather[0].main == "Drizzle"){
               weatherIcon.src = "images/drizzle.png";
            }else if(data.weather[0].main == "Mist"){
               weatherIcon.src = "images/mist.png";
            }
            
             document.querySelector(".weather").style.display = "block"; //when i will 
            //search city then it will show potion of weather other wise it will dont show
            document.querySelector(".error").style.display = "none";
            }

        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })