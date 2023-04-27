import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar-menu'>
                <li><Link to="/">Pocetna</Link></li>
                <li><Link to="/clanovi">Tko je RaptorX</Link></li>
                <li><Link to="/galerija">Galerija</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/upit">Upit</Link></li>
                <li><Link to="/prijava">Prijava</Link></li>

            </ul>

        </div>
    )
}

export default Navbar;