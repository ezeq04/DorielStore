import LifeCycle from './components/Contador/Lifecycle';
import itemListContainer from './components/ItemListContainer/itemListContainer';
import NavBar from './components/navbar/NavBar';
import './App.css'

function App() {
  return(
    <div className="container">
      <NavBar />
      <LifeCycle />
      <itemListContainer greetings="Bienvenido a mi proyecto" />
    </div>
  );
};

export default App
