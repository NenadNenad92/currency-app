import logo from './logo.svg';
import './App.css';

function App() {

  const title = 'Welcome to the new site';
  const likes = 54;
 // const person = { name: 'Brian', age: 32 };

  return (
    <div className="App">
     <div className="content">
      <h1>App Component</h1>
      <h2>{title}</h2>
      <p>Liked {likes} times</p>

      <p>{ Math.random() * 10 }</p>

     </div>
    </div>
  );
}

export default App;
