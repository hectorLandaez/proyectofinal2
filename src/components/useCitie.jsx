import { useEffect, useState } from "react";
function useCitie() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("lima");
  const [all, setAll] = useState(null);
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
  useEffect(() => {
 getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=64cffd0b66699e7fe43e5043bdc683f8&units=metric`,
      setFuture
  );
  
}, [data]);

  useEffect(() => {
    getData("list.json", setAll);
  }, [data]);

  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64cffd0b66699e7fe43e5043bdc683f8&units=metric`,
      setData
    );
  }, [city]);

  const changeCity = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
  };
  return { data, city, all, changeCity ,future};
}

export default useCitie;
