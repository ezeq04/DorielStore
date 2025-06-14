import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from './context/Context';
import Background from './components/Background/Background';
import Principal from './components/Principal/Principal';


function App() {

  return (
    <ContextProvider>
     <BrowserRouter>
       <NavBar />
          
          <Routes>
        
          <Route  path="/" element={<Principal />} />
          <Route  path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route  path="/detalle/:id" element={<ItemDetail />} />
          <Route  path="/contacto" element={<p>Esta es la sección de contacto</p>} />
          <Route  path="*" element={<Link to="/"><button>Volvé al inicio</button></Link>} />
       </Routes>
     </BrowserRouter>
    </ContextProvider>
  );
};

export default App;