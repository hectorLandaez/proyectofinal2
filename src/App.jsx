import "./App.css";
import Leftbox from "./components/Leftbox";
import RightBox from "./components/RightBox";
import useCitie from "./components/useCitie";
import TopBox from "./components/TopBox";

function App() {
  const { data, city, all, changeCity, handleFuture, future } = useCitie();

  const ocultar = (elementoOcultar, elementoMostrar) => {
    const p1 = document.getElementById(elementoOcultar);
    const p2 = document.getElementById(elementoMostrar);

    p1.style.display = "none";
    p2.style.display = "block";
  };

  return (
    <>
      {data !== null ? (
        <div className="main">
          <div className="leftBox">
            <Leftbox></Leftbox>
            <div id="firstDiv-Second"></div>
            <button onClick={() => ocultar("firstDiv-Second", "allLeftbox")}>
              cerrar
            </button>
            <form onSubmit={changeCity}>
              <input type="text" placeholder="enter a city" id="inputC" />
              {/* <ul>
          {all?.results.map((el,i) => (<li key={i}>{el.name}</li>))}
          </ul> */}
              <button type="submit"> double click</button>
            </form>
          </div>
          <div id="mid">
            {future ? (
              <TopBox
                miProp={data.name}
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

            <RightBox></RightBox>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
