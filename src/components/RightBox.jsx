import useCitie from "./useCitie";

function RightBox(props){
    const {data} = useCitie()

    return(
        <>
        {data !== null ? (
        <div className='rightBox'>
        <div className='fmiddleBox'>
          <div className='middleBox' >Wind status<span id="wind" >{props.speed} mph</span></div>
          <div className='middleBox'>Humidity<span id="humidity">{props.humidity} %</span></div>
          </div>
          <div className='fsmiddleBox'>
          <div className='smiddleBox'>Visibility <span id="visibility">{props.visibility} miles</span></div>
          <div className='smiddleBox'>Air Preasure<span id="air">{props.pressure} mb</span></div>
          </div>
        </div>
        ) : null}
        </>
    )
   
}
export default RightBox