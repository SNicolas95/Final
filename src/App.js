import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Componentes/navbar/Navbar';
import Contacto from "./Componentes/contacto/Contacto"
import Home from "./Componentes/Home/Home"
import UncontrolledExample from './Componentes/Testing/testing';


function App() {

  return (
    <>
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="Uncontrolledexample" element={<UncontrolledExample />} />
        
      </Routes>
      
    </div>
    </>
  );
}

export default App;
