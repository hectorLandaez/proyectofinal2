import useCitie from "./useCitie";

function TopBox(props) {
  const { future } = useCitie();

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
            <img src={props.mimg2} alt="time" />
            <span>
              {props.temp}°c {props.temp2}°c
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[10].dt_txt)}
            <img src={props.mimg10} alt="time" />
            <span>
            {`${props.temp8}°c${props.temp10}°c`}
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[16].dt_txt)}
            <img src={props.mimg16} alt="time" />
            <span>
              {props.temp16}°c {props.temp18}°c
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[26].dt_txt)}
            <img src={props.mimg26} alt="time" />
            <span>
              {props.temp24}°c {props.temp26}°c
            </span>
          </div>
          <div className="div1">
            {convertirFecha(future.list[34].dt_txt)}
            <img src={props.mimg34} alt="time" />
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
