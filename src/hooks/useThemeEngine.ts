
import { useEffect, useState } from "react";
import type { SensorData } from "./useSensorFeed";
export function useThemeEngine(sensor: SensorData) {
  const [themeClass, setThemeClass] = useState("theme-default");

  useEffect(() => {
    let theme = "";

    if (sensor.temperature > 35) {
      theme = "theme-hot glow";
    } else if (sensor.temperature < 20) {
      theme = "theme-cold";
    } else {
      theme = "theme-mild";
    }

    if (sensor.precipitation !== "none") {
      theme += " rain";
    }

    if (sensor.isNight) {
      theme += " night stars lightning";
    }

    setThemeClass(theme);
  }, [sensor]);

  return themeClass;
}
