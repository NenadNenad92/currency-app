import React from "react";
import "./index.css";

const Accordion = ({name, active, setActive, price_usd, asset_id, data_end }) => {

    //Accordion How-To: https://www.youtube.com/watch?v=gs14LEv7Hfk&t=288s
    return (
        
        <div className="accordion">
           <div className="accordionHeader">
                <div className="container-title">
                    <p>{name}</p>
                    <span onClick={() => setActive(name)}> {active === name ? "X" : "|||"} </span>
                </div>
            </div> 
            <div className={(active === name ? "show" : "")  + "accordionContent"}>
                <div className="container-detail">
                    <p>Aktueller Wert: € {price_usd}</p> <br></br>
                    <p>Code: {asset_id}</p> <br></br>
                    <p>Datum der Abfrage: {data_end} </p>
                </div>
            </div>
        </div>
    )
}

export default Accordion;