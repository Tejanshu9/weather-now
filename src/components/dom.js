import Location from "../models/location.js";
import { getWeather } from "../services/weatherService.js";

export function initUI() {
  const button = document.getElementById("searchBtn");

  button.addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;

    const location = new Location(city);

    const weather = await getWeather(location);

    const temperature = weather.currentConditions.temp;
    const feelsLike = weather.currentConditions.feelslike;
    const humidity = weather.currentConditions.humidity;
    const description = weather.description;

    const resultDiv = document.getElementById("weatherResult");

    resultDiv.innerHTML = ""; // clear previous content

    const title = document.createElement("h2");
    title.textContent = weather.resolvedAddress;

    const desc = document.createElement("p");
    desc.textContent = description;

    const temp = document.createElement("p");
    temp.textContent = `Temperature: ${temperature}°`;

    const feels = document.createElement("p");
    feels.textContent = `Feels like: ${feelsLike}`;

    const hum = document.createElement("p");
    hum.textContent = `Humidity: ${humidity}%`;

    resultDiv.append(title, desc, temp, feels, hum);
  });
}
