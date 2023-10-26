
import useCitie from "./useCitie";
import OCultar from "./Ocultar";

function Leftbox(props) {
const {data,future} = useCitie()

  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return formattedDate;
  };
return (
    <div>
      {data && future !== null ? (
        <div id='allLeftbox'>
          <div className="buttons">
          <button className="search" onClick={() => {
  OCultar('allLeftbox', 'firstDiv-Second');
  OCultar('btc', 'firstDiv-Second');
}}>
  Search for places
</button>
          </div>
          <div className="leftInformation" id="letinfo">
         <div className="fondo" ><img src='Cloud-background.png' alt=''></img></div>
             <img src={props.fimg} alt="" />
            <h1 className="temperature">{props.temp}°c</h1>
            <p className="climate">{props.weather}</p>
            <p className="day">today . {getCurrentDate()}</p>
            <p className="city">{props.name}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Leftbox


