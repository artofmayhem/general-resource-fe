import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Nav, Home, AboutUs, Technology } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
