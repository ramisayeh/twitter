import Explore from "./components/explore/Expolre";
import Saved from "./components/saved/Saved";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Explore /> */}
      {/* <Saved/> */}
      <Home/>
    </div>
  );
}

export default App;
