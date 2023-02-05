import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import Coin from "./Coin";
import "./index.css";


export function Home (props)  {

const [active, setActive] = useState();

  return (
    <div className="Accordion">
              <Accordion>
              name={props.name}
              price_usd={props.price_usd}
              asset_id={props.asset_id}
              data_end={props.data_end} 
              active={active} setActive={setActive}
              </Accordion>
    </div>
  );
} 

export default Home;