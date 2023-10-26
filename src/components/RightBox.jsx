import useCitie from "./useCitie";

function RightBox(props) {
  const { data } = useCitie();
  return (
    <>
      {data !== null ? (
        <div className="rightBox">
          <div className="fmiddleBox">
            <div className="middleBox">
              Wind status
              <span id="wind">
                <span id="prop">{props.speed}</span> mph{" "}
              </span>
              <span
                className="material-symbols-outlined"
                style={{ transform: `rotate(${props.direction}deg)` }}
              >
                expand_less
              </span>
            </div>
            <div className="middleBox">
              Humidity
              <span id="humidity">
                <span id="prop">{props.humidity} %</span>
              </span>
              <div id="numbers">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div id="pr">
                <div id="sec" style={{ width: `${props.ancho}%` }}></div>
              </div>
              <div id="p">
                <span>%</span>
              </div>
            </div>
          </div>
          <div className="fsmiddleBox">
            <div className="smiddleBox">
              Visibility{" "}
              <span id="visibility">
                <span id="prop">{props.visibility}miles</span>
              </span>
            </div>
            <div className="smiddleBox">
              Air Preasure
              <span id="air">
                <span id="prop">{props.pressure} mb</span>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default RightBox;
