import useCitie from "./useCitie";
import { useState , useEffect} from "react";

function TopBox(props) {

  const {getData,city,data,future} = useCitie()


const mimg = ((root)=>{
  let imagen = "/src/assets/weather-app-master/LightCloud.png"
  if(future.list[root].weather[0].description === 'light rain'){
     imagen = "/src/assets/weather-app-master/LightRain.png"
  }

  else if(future.list[root].weather[0].description === 'moderate rain'){
    imagen = "/src/assets/weather-app-master/Shower.png"
 }
 else if(future.list[root].weather[0].description === 'overcast clouds'){
  imagen = "/src/assets/weather-app-master/HeavyCloud.png"
}
else if(future.list[root].weather[0].description === 'broken clouds'){
  imagen = "/src/assets/weather-app-master/LightCloud.png"
}
else if(future.list[root].weather[0].description === 'clear sky'){
  imagen = "/src/assets/weather-app-master/Clear.png"
}
else if(future.list[root].weather[0].description === 'heavy rain'){
  imagen = "/src/assets/weather-app-master/HeavyRain.png"
}
else if(future.list[root].weather[0].description === 'thunder storm'){
  imagen = "/src/assets/weather-app-master/Thunderstorm.png"

}  else if(future.list[root].weather[0].description === 'sleet'){
  imagen = "/src/assets/weather-app-master/Sleet.png"

}  else if(future.list[root].weather[0].description === 'light rain'){
  imagen = "/src/assets/weather-app-master/LightRain.png"

}  else if(future.list[root].weather[0].description === 'snow'){
  imagen = "/src/assets/weather-app-master/Snow.png"
}

  return imagen
})

function convertirFecha(fechaStr) {

  const fecha = new Date(fechaStr);
  
  const diasSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
 
  const diaSemana = diasSemana[fecha.getDay()];
  const diaMes = fecha.getDate();
  
  const fechaFormateada = `${diaSemana} ${diaMes}`;
  
  return fechaFormateada;
}

    return(
      <>
        {future? 
        <div className='topBox'>
        <div className="div1">
        <div>{props.miProp}</div>;
          <img src={mimg(2)} alt="time" />
          <span>{future.list[0].main.temp}  {future.list[2].main.temp}</span>
        </div>
        <div className="div1">
          {convertirFecha(future.list[10].dt_txt)}
        <img src={mimg(10)} alt="time" />
          <span>{future.list[8].main.temp}°c  {future.list[10].main.temp}°c</span>
          </div>
        <div className="div1">
        {convertirFecha(future.list[16].dt_txt)}
        <img src={mimg(16)} alt="time" />
          <span>{future.list[16].main.temp} {future.list[18].main.temp}</span>
          </div>
        <div className="div1">
        {convertirFecha(future.list[26].dt_txt)}
        <img src={mimg(26)} alt="time" />
          <span>{future.list[24].main.temp} {future.list[26].main.temp}</span>
          </div>
        <div className="div1">
        {convertirFecha(future.list[34].dt_txt)}
        <img src={mimg(34)} alt="time" />
          <span>
            {future.list[32].main.temp} {future.list[34].main.temp}
          </span>
          </div>
        </div>:null  
        }
   </>
    )
}

export default TopBox
