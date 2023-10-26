import "./App.css";
import Leftbox from "./components/Leftbox";
import RightBox from "./components/RightBox";
import useCitie from "./components/useCitie";
import TopBox from "./components/TopBox";
import OCultar from "./components/Ocultar";
import React from "react";
import { InputText } from "primereact/inputtext";

function App() {
  const { data, changeCity, future, handleClick, handleLocation } = useCitie();

  const mimg = () => {
    if (data && data.weather && data.weather[0] && data.weather[0].main) {
      let imagen = "./LightCloud.png";
      switch (data.weather[0].main) {
        case "Rain":
          imagen = "./LightRain.png";
          break;
        case "moderate rain":
          imagen = "./Shower.png";
          break;
        case "Clouds":
          imagen = "./HeavyCloud.png";
          break;
        case "broken clouds":
          imagen = "./LightCloud.png";
          break;
        case "Clear":
          imagen = "./Clear.png";
          break;
        case "heavy rain":
          imagen = "./HeavyRain.png";
          break;
        case "thunder storm":
          imagen = "./Thunderstorm.png";
          break;
        case "sleet":
          imagen = "./Sleet.png";
          break;
        case "snow":
          imagen = "./Snow.png";
          break;
        default:
          break;
      }
      return imagen;
    }
  };



  const simg = (root) => {
    let imagen = "./LightCloud.png";
    if (future.list[root].weather[0].description === "light rain") {
      imagen = "./LightRain.png";
    } else if (future.list[root].weather[0].description == "moderate rain") {
      imagen = "./Shower.png";
    } else if (future.list[root].weather[0].description == "overcast clouds") {
      imagen = "./HeavyCloud.png";
    } else if (future.list[root].weather[0].description == "broken clouds") {
      imagen = "./LightCloud.png";
    } else if (future.list[root].weather[0].description == "clear sky") {
      imagen = "./Clear.png";
    } else if (future.list[root].weather[0].description == "heavy rain") {
      imagen = "./HeavyRain.png";
    } else if (future.list[root].weather[0].description == "thunder storm") {
      imagen = "./Thunderstorm.png";
    } else if (future.list[root].weather[0].description == "sleet") {
      imagen = "./Sleet.png";
    } else if (future.list[root].weather[0].description == "light rain") {
      imagen = "./LightRain.png";
    } else if (future.list[root].weather[0].description == "snow") {
      imagen = "./Snow.png";
    }

    return imagen;
  };

  return (
    <>
      {data !== null ? (
        <div className="main">
          <div className="leftBox">
            <div className="divMiAdrres">
              <button id="btc" onClick={handleLocation}>
                <span className="material-symbols-outlined">location_on</span>
              </button>
            </div>
            {data ? (
              <Leftbox
                temp={data.main.temp}
                weather={data.weather[0].main}
                name={data.name}
                fimg={mimg()}
              ></Leftbox>
            ) : null}
            <div id="firstDiv-Second">
              <div>
                <div className="cerrar">
                  <button
                    id="cerrar"
                    onClick={() => {
                      OCultar("firstDiv-Second", "allLeftbox");
                      OCultar("firstDiv-Second", "btc");
                    }}
                  >
                    <span className="material-symbols-outlined">close</span>{" "}
                  </button>
                </div>
                <form onSubmit={changeCity}>
                  <div className="card flex flex-wrap justify-content-center gap-3">
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText placeholder="city" id="inputC" />
                    </span>
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      OCultar("firstDiv-Second", "allLeftbox");
                      OCultar("firstDiv-Second", "btc");
                    }}
                  >
                    search
                  </button>
                  <div className="citybtns"></div>
                </form>
              </div>

              <button value="london" onClick={handleClick} id="inputD">
                London
              </button>
              <button value="barcelona" onClick={handleClick} id="inputD">
                barcelona
              </button>
              <button value="long beach" onClick={handleClick} id="inputD">
                long beach
              </button>
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
                mimg2={simg(2)}
                mimg10={simg(10)}
                mimg16={simg(16)}
                mimg26={simg(26)}
                mimg34={simg(34)}
              ></TopBox>
            ) : null}
            <div className="h1">
              <h2> today's highlights</h2>
            </div>
            <RightBox
              speed={data.wind.speed}
              humidity={data.main.humidity}
              visibility={data.visibility}
              pressure={data.main.pressure}
              ancho={data.main.humidity}
              direction={data.wind.deg}
            ></RightBox>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
