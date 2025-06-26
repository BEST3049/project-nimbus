export default function WeatherCard({ location, temperature, unit }: any) {
  return (
    <div className="p-4 rounded-lg bg-yellow-100 shadow-md">
      <h2 className="text-xl font-bold">{location}</h2>
      <p className="text-2xl">{temperature}{unit}</p>
    </div>
  );
}
