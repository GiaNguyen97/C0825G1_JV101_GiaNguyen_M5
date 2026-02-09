import axios from "axios";

async function getWeather() {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

    const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: "Da Nang,vn",
                units: "metric",
                appid: process.env.NEXT_PUBLIC_WEATHER_KEY,
            },
        }
    );

  return res.data;
}

function formatTime(unix: number) {
  return new Date(unix * 1000).toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function Home() {
  const data = await getWeather();

  return (
      <main className="p-6 max-w-md mx-auto border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">
          🌤 Thời tiết {data.name}, {data.sys.country}
        </h1>

        {/* Trạng thái */}
        <div className="flex items-center gap-3 mb-4">
          <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
          />
          <div>
            <p className="text-lg font-semibold">
              {data.weather[0].main}
            </p>
            <p className="text-gray-600">
              {data.weather[0].description}
            </p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <ul className="space-y-2">
          <li>🌡 Nhiệt độ: {data.main.temp} °C</li>
          <li>🤗 Cảm giác như: {data.main.feels_like} °C</li>
          <li>💧 Độ ẩm: {data.main.humidity} %</li>
          <li>🔽 Áp suất: {data.main.pressure} hPa</li>
          <li>💨 Gió: {data.wind.speed} m/s</li>
          <li>🌅 Mặt trời mọc: {formatTime(data.sys.sunrise)}</li>
          <li>🌇 Mặt trời lặn: {formatTime(data.sys.sunset)}</li>
        </ul>
      </main>
  );
}