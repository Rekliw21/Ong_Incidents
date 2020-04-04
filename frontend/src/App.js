import React from 'react';

import './global.css';

//import Logon from './pages/Logon'; //automaticamente procura index
import Routes from './routes';

function App() {
/**  
  const [counter, setCounter] = useState(0);
  
  function increment() {
    setCounter(counter + 1 );
  }
*/
  return (
    //<Logon />
    <Routes />
/**    
    <div>
      <Header>Contador: {counter}</Header> 
      <button>OnClick={increment}>Incrementar</button>
    </div>
    //<h1>Hello World</h1>
    //<Header /> //substitui <Header></Header>
*/
  );
}

export default App;