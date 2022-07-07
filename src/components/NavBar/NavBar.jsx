import React from 'react';
import Logo from "../../assets/logoProvisorio.png";
import CartWidget from "../../components/CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
        <img src={Logo} alt="Logo provisorio" />
        <h1>👨‍💻 Mi tienda Jiménez 👨‍💻</h1>
        <nav>
          <a href="">Inicio</a>
          <a href="">Productos</a>
          <a href="">Pago</a>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar