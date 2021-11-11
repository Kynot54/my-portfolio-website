// Component Imports
import MyNavBar from "./components/navBar";
import MyHeader from "./components/Header";
import MyAbout from "./components/About";
import MyProjects from "./components/Projects"
import MyContact from "./components/Contact"
import MyFooter from "./components/Footer"

import "./fonts/fonts.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"

function App() {
  return (
    <div id="App">
        <MyNavBar className="viewport"/>
        <MyHeader className="viewport"/>
        <MyAbout className="viewport" />
        <MyProjects className="viewport" />
        <MyContact className="viewport" />
        <MyFooter className="viewport" />
    </div>
  );
}

export default App;
