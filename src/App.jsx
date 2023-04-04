import React from "react";
import MyNavbar from "./components/MyNavbar";
import Yonalishlar from "./components/Yonalishlar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Error from "./components/Error";
import MyFooter from "./components/MyFooter";
import Dasturlash from "./components/Dasturlash";


function App() {

    return (
        <Router>
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Yonalishlar />} />
                <Route path="/dasturlash" element={<Dasturlash />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <MyFooter />
        </Router>
    )
}

export default App;