import logo from "./logo.svg";
import "./App.css";
import "bootstrap";

import Navibar from "./components/navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Users from "./components/users";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div style={{width: '100vw'}}>
      {/* <div style={{ minHeight: "100%", position: "relative" }}> */}
        <BrowserRouter>
          <Navibar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      {/* </div> */}
      {/* <div style={{position: 'absolute', left: '0', right: '0', top: '0', bottom: '0',}}> */}
        <Footer />  
      {/* </div> */}
    </div>
  );
}

export default App;
