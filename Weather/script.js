// const api_key=""; //enter your api key here

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windS = document.querySelector(".wind-Speed");
const img = document.querySelector(".display-img");
const error = document.querySelector(".error");
const mainContent = document.querySelector(".main-content");

const fetchData = async () => {
    const api_key = "22adb928806cb613aaa42230a6b1d3b4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`;
    const response = await fetch(url);

    if (response.status == 404) {
        error.style.display = "block";
        mainContent.style.display = "none";
    }
    else {
        let result = await response.json();
        // console.log(result);
        temp.innerText = Math.round(result.main.temp) + "°C";
        city.innerText = result.name;
        humidity.innerText = result.main.humidity + "%";
        windS.innerText = result.wind.speed + " km/h";

        if (result.weather[0].main == "Clouds") {
            img.src = "./weather-app-img/images/clouds.png";
        }
        else if (result.weather[0].main == "Clear") {
            img.src = "./weather-app-img/images/clear.png";
        }
        else if (result.weather[0].main == "Drizzle") {
            img.src = "./weather-app-img/images/drizzle.png";
        }
        else if (result.weather[0].main == "Mist") {
            img.src = "./weather-app-img/images/mist.png";
        }
        else if (result.weather[0].main == "Rain") {
            img.src = "./weather-app-img/images/rain.png";
        }
        else if (result.weather[0].main == "Snow") {
            img.src = "./weather-app-img/images/snow.png";
        }
        error.style.display = "none";
        mainContent.style.display = "block";
    }
}

btn.addEventListener("click", () => {
    fetchData();
})
