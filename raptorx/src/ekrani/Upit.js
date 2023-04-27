import React from "react";
import Navbar from "../components/Navbar";
import UpitForma from "../components/UpitForma";


function Upit() {
    return (
        <div>
            <Navbar></Navbar>
            <div>Postavite nam upit:</div>
            <UpitForma></UpitForma>
            
        </div>
    );
}

export default Upit;