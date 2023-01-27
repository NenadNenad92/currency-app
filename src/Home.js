import { useEffect } from "react";
import { useState } from "react";
import Accordion from "./Accordion";
import "./index.css";


const Home = () => {
  const [currency, setCurrency] = useState();

  let date = new Date().toJSON();
  let yesterday = new Date();
  yesterday.setDate (yesterday.getDate() - 1);
  yesterday = yesterday.toJSON();

  //Key Martin: 310F6C53-3C9B-4ABA-947C-9E5DA1870FB9
  //Key Anna: 034C8A7E-DA45-4019-9511-45B11E8A3796
  //Key Martin neu: 1A46D162-2DB6-4EF5-95D5-98280226E903
  //Key Martin 3: 76D7319D-DFC5-45B2-AB15-20606E9BE1EE
  //Key Nenad: 57B90FE3-61EC-4BAB-A14C-53B32434A4FD
  //Key Anna 2: 8BBF599C-332A-4827-8E90-4091100DC235

  //https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;ETH2;USDT;BNB;USDC;XRP;BUSD;ADA;DOGE&apikey=57B90FE3-61EC-4BAB-A14C-53B32434A4FD
  useEffect(() => {
    fetch('https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;ETH2;USDT;BNB;USDC;XRP;BUSD;ADA;DOGE&apikey=8BBF599C-332A-4827-8E90-4091100DC235')
    .then(res => { return res.json();
    })
    .then(data => {
      setCurrency(data);
    });
  }, []);

  const [active, setActive] = useState();

  return (
    <div className="accordion">
      {currency?.map(currency => (
              <Accordion 
              name={currency.name}
              price_usd={currency.price_usd}
              asset_id={currency.asset_id}
              data_end={currency.data_end} 
              active={active} setActive={setActive}>
              </Accordion> )
        )}
    </div>
  );
} 

export default Home;