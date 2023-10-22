
import useCitie from "./useCitie";
import TopBox from "./TopBox";

function Leftbox() {
const {data, city, all,changeCity,handleFuture} = useCitie()
let nombre = ''
data?nombre = data.name:null
const ocultar = ((elementoOcultar,elementoMostrar)=>{
  const p1 = document.getElementById(elementoOcultar)
  const p2 = document.getElementById(elementoMostrar)
  p1.style.display='none'
  p2.style.display='block'
})

return (
    <div className="leftBox">
      {data !== null ? (
        <div id='allLeftbox'>
          <TopBox miProp ={data.name}></TopBox>
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
      <div id="firstDiv-Second">
      <button onClick={()=>ocultar('firstDiv-Second','allLeftbox')}>cerrar</button>
      <form onSubmit={changeCity}>
          <input type="text" placeholder="enter a city" id="inputC" />
          {/* <ul>
          {all?.results.map((el,i) => (<li key={i}>{el.name}</li>))}
          </ul> */}
        <button type="submit"> double click</button>
        </form>
      </div>
      
    </div>
  );
}

export default Leftbox

