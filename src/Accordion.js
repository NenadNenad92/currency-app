import React from "react";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";

const Accordion = ({name, active, setActive, price_usd, asset_id, data_end }) => {
    let date = new Date().toJSON();
    let yesterday = new Date();
    yesterday.setDate (yesterday.getDate() - 1);
    yesterday = yesterday.toJSON();
    const [oldvalue, setOldValue] = useState();
    console.log(asset_id);
    useEffect(() => {
        fetch('https://rest.coinapi.io/v1/exchangerate/'+asset_id+'/USD?time=2023-01-26T22:08:41Z&apikey=8BBF599C-332A-4827-8E90-4091100DC235')
        .then(res => { return res.json();
        })
        .then(output => {
        setOldValue(output);
        console.log(output)
        });
      }, []);

     var tendenz = parseFloat(((price_usd - oldvalue.rate)/oldvalue.rate)*100).toFixed(2);
     //console.log(oldvalue.rate);
     //console.log(tendenz);

    return (
        
        <div className="accordion">
           <div className="accordionHeader">
                <div className="container-title">
                    <p>{name} <li style={{color: {tendenz} <0? "green" : "red"}}> {tendenz}% </li></p>
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
    setOldValue(null);
}
    
export default Accordion;