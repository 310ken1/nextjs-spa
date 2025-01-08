import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "./open_meteo_api";

type HourlyData = {
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
};

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
    select: (data: HourlyData): [string, number][] => {
      if (data?.hourly == null) return [];
      const { time, temperature_2m } = data.hourly;
      const minLength = Math.min(time.length, temperature_2m.length);
      const pairs: [string, number][] = [];
      for (let i = 0; i < minLength; i++) {
        pairs.push([time[i], temperature_2m[i]]);
      }
      return pairs;
    },
    staleTime: Infinity,
  });
};
