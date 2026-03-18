import Location from "../models/location.js";

export async function getWeather(location) {
  try {
    const city = location.getCity();

    if (!city) {
      throw new Error("City is not set");
    }

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LW2KNFGD8Q2T42T6SJMY6R7WV`,
    );

    if (!response.ok) {
      throw new Error("Weather API request failed");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
