import logo from './logo.svg';
import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Product from './Routes/Product';
import Navbar from './Routes/Navbar';
 function App() {
  return (
   <>

   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
   </Routes>
 

   </>
  );
}

export default App;
