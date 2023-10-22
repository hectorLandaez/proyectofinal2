
import useCitie from "./useCitie";

function Leftbox() {

const {data, city, all,changeCity,handleFuture} = useCitie()


const ocultar = ((elementoOcultar,elementoMostrar)=>{

  const p1 = document.getElementById(elementoOcultar)
  const p2 = document.getElementById(elementoMostrar)

  p1.style.display='none'
  p2.style.display='block'
})

return (
    <div >
      {data !== null ? (
        <div id='allLeftbox'>
          <div className="buttons">
            <button className="search" onClick={()=>ocultar('allLeftbox','firstDiv-Second')}>Search for places</button>
            <button className="btc">c</button>
          </div>
          <div className="leftInformation" id="letinfo">
            <img src="src/assets/weather-app-master/Clear.png" alt="" />
            <h1 className="temperature">{data.main.temp}</h1>
            <p className="climate">{data.weather[0].description}</p>
            <p className="day">today fri. 5 jun</p>
            <p className="city">{data.name}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Leftbox

