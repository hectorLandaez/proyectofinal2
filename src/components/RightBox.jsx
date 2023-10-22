import useCitie from "./useCitie";

function RightBox() {
  const { data } = useCitie();
  return (
    <>
      {data !== null ? (
        <div className="rightBox">
          <div className="fmiddleBox">
            <div className="middleBox">
              Wind status<span id="wind">{data.wind.speed} mph</span>
            </div>
            <div className="middleBox">
              Humidity<span id="humidity">{data.main.humidity} %</span>
            </div>
          </div>
          <div className="fsmiddleBox">
            <div className="smiddleBox">
              Visibility <span id="visibility">{data.visibility} miles</span>
            </div>
            <div className="smiddleBox">
              Air Preasure<span id="air">{data.main.pressure} mb</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default RightBox;
