import React from "react";
import Navbar from "../components/Navbar";
import ivan from '../img/Ivan.jpg'
import luka from '../img/Luka.jpg'
import dominik from '../img/Dominik.jpg'
import danijel from '../img/Danijel.jpg'

function Clanovi() {
    return (
        <div>
            <Navbar></Navbar>
            <div>Clanovi</div>
            <img src={ivan} className="Ivan" alt="ivan" />
            <img src={luka} className="Luka" alt="luka" />
            <img src={dominik} className="Dominik" alt="dominik" />
            <img src={danijel} className="Danijel" alt="danijel" />
        </div>
    );
}

export default Clanovi;