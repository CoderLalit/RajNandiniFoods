import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import pic from "./images/Raj_Nandini_logo.png";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Products from './components/Products';

function App() {

  setTimeout(() => {
    let splash = document.getElementById("splash-screen");
    let page = document.getElementById("webpage");
    splash.style.display="none";
    page.style.display="block";
  }, 1500);

  return (
    <>
      <Router>
      <Splash/>
      <div className="container-fluid m-0 p-0" id="webpage">
        <Navbar logo={pic}/>
        <div className="container-fluid" id="main-content">
          <Routes>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/" element={<Products/>}/>
          </Routes>
        </div>
      <Footer/>
      </div>
      </Router>
    </>
  );
}

export default App;
