import useCitie from "./useCitie";

function TopBox(props) {
  const { future } = useCitie();

  const mimg = (root) => {
    let imagen = "/src/assets/weatherLightCloud.png";
    if (future.list[root].weather[0].description === "light rain") {
      imagen = "/src/assets/weather/LightRain.png";
    } else if (future.list[root].weather[0].description === "moderate rain") {
      imagen = "/src/assets/weather/Shower.png";
    } else if (future.list[root].weather[0].description === "overcast clouds") {
      imagen = "/src/assets/weather/HeavyCloud.png";
    } else if (future.list[root].weather[0].description === "broken clouds") {
      imagen = "/src/assets/weather/LightCloud.png";
    } else if (future.list[root].weather[0].description === "clear sky") {
      imagen = "/src/assets/weather/Clear.png";
    } else if (future.list[root].weather[0].description === "heavy rain") {
      imagen = "/src/assets/weather/HeavyRain.png";
    } else if (future.list[root].weather[0].description === "thunder storm") {
      imagen = "/src/assets/weatherThunderstorm.png";
    } else if (future.list[root].weather[0].description === "sleet") {
      imagen = "/src/assets/weather/Sleet.png";
    } else if (future.list[root].weather[0].description === "light rain") {
      imagen = "/src/assets/weather/LightRain.png";
    } else if (future.list[root].weather[0].description === "snow") {
      imagen = "/src/assets/weather/Snow.png";
    }

    return imagen;
  };

  function convertirFecha(fechaStr) {
    const fecha = new Date(fechaStr);

    const diasSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const diaSemana = diasSemana[fecha.getDay()];
    const diaMes = fecha.getDate();

    const fechaFormateada = `${diaSemana} ${diaMes}`;

    return fechaFormateada;
  }

  return (
    <>
      {future ? (
        <div className="topBox">
          <div className="div1">
            tomorrow
            <img src={mimg(2)} alt="time" />
            <span>
              {props.temp}°c {props.temp2}°c
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[10].dt_txt)}
            <img src={mimg(10)} alt="time" />
            <span>{`${props.temp8}°c${props.temp10}°c`}</span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[16].dt_txt)}
            <img src={mimg(16)} alt="time" />
            <span>
              {props.temp16}°c {props.temp18}°c
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[26].dt_txt)}
            <img src={mimg(26)} alt="time" />
            <span>
              {props.temp24}°c {props.temp26}°c
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[34].dt_txt)}
            <img src={mimg(34)} alt="time" />
            <span>
              {props.temp32}°c {props.temp34}°c
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TopBox;
