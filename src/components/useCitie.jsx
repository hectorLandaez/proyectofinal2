import { useEffect, useState } from "react";

function useCitie() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("lima");
  const [all, setAll] = useState(null);

  const humidity = document.getElementById("humidity");
  const visibility = document.getElementById("visibility");
  const air = document.getElementById("air");
  const wind = document.getElementById("wind");
  const [future, setFuture] = useState(null);

  const getData = async (url, setState) => {
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      setState(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFuture = getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e781396f7ff35c57917cdeba820340ba&units=metric`,
      setFuture
  );

  useEffect(() => {
    getData("list.json", setAll);
  }, [data]);

  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e781396f7ff35c57917cdeba820340ba&units=metric`,
      setData
    );
  }, [city]);

  const changeCity = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);

    humidity.textContent = data.main.humidity + " %";
    visibility.textContent = data.visibility + " miles";
    air.textContent = data.main.pressure + " mb";
    wind.textContent = data.wind.speed + " mps";
  };
  return { data, city, all, changeCity ,future, handleFuture};
}

export default useCitie;
