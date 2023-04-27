import React from "react";
import './UpitForma.css';
import { useState } from "react";


function UpitForma ()  {
    const [textarea, setTextarea] = useState(
        "Ovdje unesite upit."
      );
    
      const handleChange = (event) => {
        setTextarea(event.target.value)
      }
    return (
        <form className="upitna-forma">
            <label className="ime">Unesite svoje ime i prezime: <br></br>
            <input type="text" />
            </label>

            <label className="mail">Unesite svoju mail adresu: <br></br>
            <input type="email" />
            </label>

            <label className="upit">
            <textarea value={textarea} onChange={handleChange} />
            </label>

            <button>Pošalji</button>

        </form>

    )
}

export default UpitForma;