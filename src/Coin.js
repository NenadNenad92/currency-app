import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home";


  //Key Martin: 310F6C53-3C9B-4ABA-947C-9E5DA1870FB9
  //Key Anna: 034C8A7E-DA45-4019-9511-45B11E8A3796
  //Key Martin neu: 1A46D162-2DB6-4EF5-95D5-98280226E903
  //Key Martin 3: 76D7319D-DFC5-45B2-AB15-20606E9BE1EE
  //Key Nenad: 57B90FE3-61EC-4BAB-A14C-53B32434A4FD
  //Key Anna 2: 8BBF599C-332A-4827-8E90-4091100DC235

export function Coin () {

var key ="8BBF599C-332A-4827-8E90-4091100DC235";

const [data, setData] = useState(null);
const [isLoading, setisLoading] = useState(true);

useEffect( () => {
  loadData();
}, []);

async function loadData  () {
    await fetch('https://rest.coinapi.io/v1/assets?filter_asset_id=BTC&apikey='+key+'')
    .then (response => response.json())
    .then (receivedData => setData(receivedData));
    setisLoading(false);
}

//console.log(data);

if(!isLoading) return (<div className="Coin" >
  <Home {...data} />
</div> )

}
export default Coin;