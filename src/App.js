import logo from './logo.svg';
import './App.css';
import Bonjour from  './bonjour/index';
import Ladour from './hero/index'
import { Menu1, Menu2 } from './commun/Menu';
import Vehicule from './vehicule/index'

function App() {
  return (
    <div className="App">
      <Bonjour nom="LADOUR" prenom="Karl"/>
      <Menu1/>
      <Menu2/>
      <Vehicule/>
      
    </div>
  );
}

export default App;
