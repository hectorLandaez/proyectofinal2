
import useCitie from "./useCitie";
import OCultar from "./Ocultar";

function Leftbox(props) {
const {data,future} = useCitie()

const mimg = (root) => {
  let imagen = "/src/assets/weather-app-master/LightCloud.png";
    if (data.weather[root].main === "light rain") {
      imagen = "/src/assets/weather-app-master/LightRain.png";
    } else if (data.weather[root].main === "moderate rain") {
      imagen = "/src/assets/weather-app-master/Shower.png";
    } else if (data.weather[root].main === "overcast clouds") {
      imagen = "/src/assets/weather-app-master/HeavyCloud.png";
    } else if (data.weather[root].main === "broken clouds") {
      imagen = "/src/assets/weather-app-master/LightCloud.png";
    } else if (data.weather[root].main === "clear sky") {
      imagen = "/src/assets/weather-app-master/Clear.png";
    } else if (data.weather[root].main === "heavy rain") {
      imagen = "/src/assets/weather-app-master/HeavyRain.png";
    } else if (data.weather[root].main === "thunder storm") {
      imagen = "/src/assets/weather-app-master/Thunderstorm.png";
    } else if (data.weather[root].main === "sleet") {
      imagen = "/src/assets/weather-app-master/Sleet.png";
    } else if (data.weather[root].main === "light rain") {
      imagen = "/src/assets/weather-app-master/LightRain.png";
    } else if (data.weather[root].main === "snow") {
      imagen = "/src/assets/weather-app-master/Snow.png";
    }
    return imagen;
  } 
  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return formattedDate;
  }
return (
    <div>
      {data && future !== null ? (
        <div id='allLeftbox'>
          <div className="buttons">
            <button className="search" onClick={()=>OCultar('allLeftbox','firstDiv-Second')}>Search for places</button>
            <button className="btc">c</button>
          </div>
          <div className="leftInformation" id="letinfo">
            <img src={mimg(0)} alt="" />
            <h1 className="temperature">{props.temp}°c</h1>
            <p className="climate">{props.weather}</p>
            <p className="day">today {getCurrentDate()}</p>
            <p className="city">{props.name}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Leftbox

