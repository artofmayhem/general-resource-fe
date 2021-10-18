import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { Nav, Home, AboutUs, Technology } from "./components";
import { GeneralHeader, Sunrise, IslandRoad } from "./assets/index";
import ReactPlayer from "react-player/lazy";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div
          className={
            "flex justify-center flex-col items-end text-white text-2xl  py-20 w-screen h-screen"
          }
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // opacity: "0.5",
          }}
        >
          <div className={'flex flex-col items-end justify-center pr-24 border-2 border-white py-10 bg-yellow-500'} style={{ width: '45rem', boxShadow: '0 0 3rem black'}}>
            <h1
              className={"animate-fade-in-up text-7xl text-white"}
              style={{ textShadow: "0px 0px 1.5rem black" }}
            >
              General Resource
            </h1>{" "}
            <h1
              className={
                "animate-fade-in-up mt-6 text-3xl text-white"
              }
              style={{ textShadow: "0px 0px 1.5rem black" }}
            >
              Re-imagining the future of energy
            </h1>
          </div>
        </div>
        <ReactPlayer
          url={GeneralHeader}
          playing={true}
          loop={true}
          width={"100%"}
          height={"100%"}
          id={"video-player"}
          playsinline={true}
          forceVideo
          controls
        />
        <div className={"h-screen bg-white -mt-72"}>
          <div
            className={"content bg-white flex flex-row flex-wrap items-center "}
          >
            <div className={"w-1/2 flex flex-col px-48  justify-center"}>
              <h1 className={"text-yellow-500 text-6xl m-auto text-left"}>
                Paving the way to a sustainable future...
              </h1>
              <p className={"text-left text-xl mt-4"}>
                Soliterraneous Energy Generators are buried entirely underground
                within existing highway and street systems, where they generate
                clean energy with less than 5% in annual maintenance costs over
                a 20+ year life span.
              </p>
              <Link to={"/home"}>
                <h1
                  className={
                    "animate-pulse animate-fade-in-up bg-yellow-500 py-6 w-48 text-2xl mt-10 border-2 border-white"
                  }
                  style={{ opacity: 0.8 }}
                >
                  Learn More
                </h1>
              </Link>
            </div>
            <div className={"flex justify-center items-center w-1/2"}>
              <img
                src={Sunrise}
                style={{ width: "90%" }}
                alt={"a young man watching a sunrise"}
              />
            </div>
          </div>
        </div>
        <div
          className={
            "w-screen h-72 mt-32 flex justify-center items-center text-center"
          }
        >
          <h2
            className={
              "text-white text-4xl w-1/2 bg-yellow-500 w-screen py-48 px-80"
            }
          >
            Installed completely underground, these mega energy generators
            harness the natural energies that power the Earth to produce a
            clean, limitless supply of energy.
          </h2>
        </div>
        <div className={"h-screen bg-white "}>
          <div
            className={"content bg-white flex flex-row flex-wrap items-center "}
          >
            <div className={"flex justify-center items-center w-1/2"}>
              S
              <img
                src={IslandRoad}
                style={{ width: "90%" }}
                alt={
                  "a winding island road with our SEGs safely tucked underneath"
                }
              />
            </div>

            <div className={"w-1/2 flex flex-col px-48  justify-center"}>
              <h1 className={"text-yellow-500 text-6xl m-auto text-right"}>
                Energy Generation Meets Land Management
              </h1>
              <p className={"text-right text-xl mt-4"}>
                Safely tucked underneath the highway, these mega energy
                generators do not require any additional footprint to provide
                clean energy at a fraction of the cost of current energy models.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </Router>
  );
}

export default App;
