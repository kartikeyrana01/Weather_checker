import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "80250d5aa207387506b887ed52598ce3";

  const Getdata = async (cityName) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");

      const jsonResponse = await response.json();
      return {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (error) {
      throw error;
    }
  };

  const handleOnChange = (e) => {
    setCity(e.target.value);
    if (err) setErr(false); // Clear error on input change
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      const newInfo = await Getdata(city);
      updateInfo(newInfo);
      setCity("");
      setErr(false);
    } catch {
      setErr(true);
    }
  };

  return (
    <div className="text-center mt-12 px-4 max-w-md mx-auto">
      <h3 className="font-semibold text-xl mb-6">Check Your City Weather</h3>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="city-input"
          label="City Name"
          variant="outlined"
          required
          fullWidth
          value={city}
          onChange={handleOnChange}
          autoComplete="off"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          disabled={!city.trim()}
          sx={{ mt: 2 }}
          fullWidth
        >
          Search
        </Button>
      </form>
      {err && (
        <p className="mt-4 text-red-600 font-medium">
          No such place exists. Please try again.
        </p>
      )}
    </div>
  );
}
