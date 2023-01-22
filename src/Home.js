import { useEffect } from "react";
import { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

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

  useEffect(() => {
    fetch('https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;ETH2;USDT;BNB;USDC;XRP;BUSD;ADA;DOGE&apikey=76D7319D-DFC5-45B2-AB15-20606E9BE1EE')
    .then(res => { return res.json();
    })
    .then(data => {
      setCurrency(data);
    });
  }, []);


  return (
    <div className="home">
      {currency?.map((currency) => (
        <Accordion defaultActiveKey="0" name="token-preview">
          <Accordion.Item eventKey="0">
           <Accordion.Header>{currency.name}</Accordion.Header>
           <Accordion.Body>
               Aktuller Wert: € {currency.price_usd}
               Code: {currency.asset_id}
               Datum: {currency.data_end}
           </Accordion.Body>
          </Accordion.Item>
        </Accordion>
))}
</div>
  );
} 

export default Home;