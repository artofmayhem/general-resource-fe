import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Nav, Home, AboutUs, Technology } from "./components";
import {HeaderVideo} from './assets/index'
import ReactPlayer from 'react-player'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <ReactPlayer
            url={HeaderVideo}
            playing={true}
            loop={true}
            height={'100%'}
            width={'100%'}
            style={{margin: 'auto auto', }}
            id={'video-player'}
            playsinline={true}
        />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </Router>
  );
}

export default App;
