import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { Nav, Home, AboutUs, Technology } from "./components";
import {HeaderVideo} from './assets/index'
import ReactPlayer from 'react-player'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div
      className={
        "flex justify-center flex-col items-center text-white text-2xl py-20 px-32"
      }
      style={{position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0.8'}}
    >
      <h1
          className={
            "animate-pulse animate-fade-in-up text-7xl text-white "
          }
          style={{ borderRadius: "50px", textShadow: "0px 0px 1.5rem black" }}
        >
          General Resource
        </h1>
      <Link to={"/home"}>
        <h1
          className={
            "animate-pulse animate-fade-in-up bg-gray-500 py-6 px-10 mt-32 border-2 border-white"
          }
          style={{ borderRadius: "50px", opacity: 0.8 }}
        >
          Step Inside
        </h1>
      </Link>
    </div>
        <ReactPlayer
            url={HeaderVideo}
            playing={true}
            loop={true}
            height={'100%'}
            width={'100%'}
            style={{margin: 'auto auto'}}
            id={'video-player'}
            playsinline={true}
        />
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
