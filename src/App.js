import Explore from "./components/explore/Expolre";
import Saved from "./components/saved/Saved";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/signup/Register";
import Login from "./components/signin/Login";




function App() {

  return (
   
      <Router>
        <div className="App">
        <Header/>
        <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} /> 
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/home" component={Home} />

        </div>
      </Router>
     

  );
}

export default App;
