import { useState } from "react";

const Home = () => {
  const [token, setToken] = useState([
    { title: 'Bitcoine', value: 2134.92, id: 1 },
    { title: 'Etherium', value: 980.11, id: 2 },
    { title: 'Dogcoin', value: 1.52, id: 3 }
  ])

  return (
    <div className="home">
      {token.map(token => (
        <div className="token-preview" key={token.id} >
          <h2>{ token.title }</h2>
          <h3>Current value is   ${ token.value }</h3>
        </div>
      ))}
    </div>
  );
}
 
export default Home;