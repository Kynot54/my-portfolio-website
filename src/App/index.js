// Component Imports
import MyNavBar from "./components/navBar";
import MyHeader from "./components/Header";
import MyAbout from "./components/About";
import MyProject from "./components/Projects"
import MyContact from "./components/Contact"
import MyFooter from "./components/Footer"

import {text} from "./data.js"

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"



function App() {
  return (
    <div id="App">
        <MyNavBar image={text[0].image} tab1={text[0].tab1} tab2={text[0].tab2} tab3={text[0].tab3} tab4={text[0].tab4} className="viewport"/>
        <MyHeader image={text[1].image} className="viewport"/>
        <MyAbout image={text[2].image} title={text[2].title} intro={text[2].intro} paragraph={text[2].paragraph} className="viewport" />
        <MyProject title={text[3].title} className="viewport" />
        <MyContact title={text[4].title} paragraph={text[4].paragraph} className="viewport" />
        <MyFooter className="viewport" />
    </div>
  );
}

export default App;
