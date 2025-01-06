const OPEN_METEO_API_URL = "https://archive-api.open-meteo.com/v1/era5?";

export const fetchWeatherData = async (
  latitude: number,
  longitude: number,
  startDate: string,
  endDate: string
) => {
  const url = new URL(OPEN_METEO_API_URL);
  url.searchParams.append("latitude", String(latitude));
  url.searchParams.append("longitude", String(longitude));
  url.searchParams.append("start_date", startDate);
  url.searchParams.append("end_date", endDate);
  url.searchParams.append("hourly", "temperature_2m");

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
