import React from "react";
import MyNavbar from "./components/MyNavbar";
import Yonalishlar from "./components/Yonalishlar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Error from "./components/Error";
import MyFooter from "./components/MyFooter";
import Dasturlash from "./components/Dasturlash";
import English from "./components/English";
import Foundation from "./components/Foundation";
import About from "./components/About";
import Contact from "./components/Contact";
import NewNavbar from "./components/NewNavbar";


function App() {

    return (
        <Router>
            {/* <MyNavbar /> */}
            <NewNavbar />
            <Routes>
                <Route path="/" element={<Yonalishlar />} />
                <Route path="/dasturlash" element={<Dasturlash />} />
                <Route path="/english" element={<English />} />
                <Route path="/foundation" element={<Foundation />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <MyFooter />
        </Router>
    )
}

export default App;