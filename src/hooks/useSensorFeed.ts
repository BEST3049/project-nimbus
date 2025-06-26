import { useEffect, useState } from "react";

export type SensorData = {
  temperature: number;
  precipitation: "none" | "light" | "heavy";
  isNight: boolean;
};

export function useSensorFeed() {
  const [sensor, setSensor] = useState<SensorData>({
    temperature: 30,
    precipitation: "none",
    isNight: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTemp = Math.floor(Math.random() * 50); // 10 - 50°C
      const precip = Math.random() > 0.7 ? "light" : "none";
      const night = Math.random() > 0.5;

      setSensor({
        temperature: randomTemp,
        precipitation: precip as "none" | "light" | "heavy",
        isNight: night,
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return sensor;
}
