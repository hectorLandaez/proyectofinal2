import "./App.css";
import Leftbox from "./components/Leftbox";
import RightBox from "./components/RightBox";
import useCitie from "./components/useCitie";
import TopBox from "./components/TopBox";
import OCultar from "./components/Ocultar";

function App() {
  const { data, changeCity, future } = useCitie();

  return (
    <>
      {data !== null ? (
        <div className="main">
          <div className="leftBox">
            <Leftbox
              temp={data.main.temp}
              weather={data.weather[0].description}
              name={data.name}
            ></Leftbox>
            <div id="firstDiv-Second">
              <button onClick={() => OCultar("firstDiv-Second", "allLeftbox")}>
                cerrar
              </button>
              <form onSubmit={changeCity}>
                <input type="text" placeholder="enter a city" id="inputC" />
                <button type="submit" onClick={() => OCultar("firstDiv-Second", "allLeftbox")}>search</button>
              </form>
            </div>
          </div>
          <div id="mid">
            {future ? (
              <TopBox
                temp={future.list[0].main.temp}
                temp2={future.list[2].main.temp}
                temp8={future.list[8].main.temp}
                temp10={future.list[10].main.temp}
                temp16={future.list[16].main.temp}
                temp18={future.list[18].main.temp}
                temp24={future.list[24].main.temp}
                temp26={future.list[26].main.temp}
                temp32={future.list[32].main.temp}
                temp34={future.list[34].main.temp}
              ></TopBox>
            ) : null}
            <RightBox
              speed={data.wind.speed}
              humidity={data.main.humidity}
              visibility={data.visibility}
              pressure={data.main.pressure}
            ></RightBox>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
