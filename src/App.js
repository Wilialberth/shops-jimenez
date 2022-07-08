import './App.css';
import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';



function App (){
  const greeting = "Bienvenidos a mi tienda aun en construcción."

  return(
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element= {ItemListContainer} />
        <Route path="/category/:categoryId" element= {ItemListContainer} />
        <Route path="/item/:id" element= {<ItemDetailContainer />} />
        <Route path="/Cart" element= {<Cart/>} />
        <ItemListContainer greeting={greeting} />
        <ItemCount/>
        <ItemDetailContainer />

      </Routes>
       
    </BrowserRouter>
  );
}
export default App;