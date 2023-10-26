import { useEffect, useState } from "react";
import OCultar from "./Ocultar";
function useCitie() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("lima");
  const [all, setAll] = useState(null);
  const [future, setFuture] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const getData = async (url, setState) => {
    try {
      const res = await fetch(url);

      const resJson = await res.json();

      setState(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=64cffd0b66699e7fe43e5043bdc683f8&units=metric`,
      setFuture
    );
  }, [data]);
  

/*   useEffect(() => {
    getData("list.json", setAll);
  }, [data]);
 */


  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64cffd0b66699e7fe43e5043bdc683f8&units=metric`,
      setData
    );
  }, [city]);


  useEffect(() => {
    if (lat === null && long === null) return;
    getData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=64cffd0b66699e7fe43e5043bdc683f8&units=metric`,
      setData
    );
  }, [lat, long]);

  const handleSucces = (data) => {
    const { latitude, longitude } = data.coords;
    setLat(latitude);
    setLong(longitude);
  };

  const handleError = () => {
    console.log("ubicacion denegada");
  };

  const changeCity = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
  };


  const handleClick = (e) => {
    e.preventDefault();
    setCity(e.target.value);
      OCultar("firstDiv-Second", "allLeftbox");
      OCultar("firstDiv-Second", "btc");
  };


  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSucces, handleError);
  };
  return { data, city, all, changeCity, future, handleClick, handleLocation };
}

export default useCitie;
