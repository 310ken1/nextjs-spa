import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "./open_meteo_api";

export const useWeatherData = (
  latitude: number,
  longitude: number,
  startDate: Date,
  endDate: Date
) => {
  const start = startDate.toISOString().slice(0, 10);
  const end = endDate.toISOString().slice(0, 10);
  return useQuery({
    queryKey: ["weather", latitude, longitude, start, end],
    queryFn: () => fetchWeatherData(latitude, longitude, start, end),
    staleTime: Infinity,
  });
};
