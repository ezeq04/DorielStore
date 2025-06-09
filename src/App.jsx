import './App.css';
import Lifecycle from './components/Contador/Lifecycle';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

import NavBar from './components/NavBar/navbar';

function App() {

  return (
 <>
  <NavBar />   
  <div className="container">
    <Lifecycle />
    <ItemListContainer greetings="Bienvenido a mi proyecto" />
  </div>
</>

  );
};

export default App;