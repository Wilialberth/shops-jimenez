import React from 'react';
import Logo from "../../assets/logoProvisorio.png";
import CartWidget from "../../components/CartWidget/CartWidget";
import "./NavBar.css";

const categories = [
  {
      id: 1,
      path: '/',
      name: 'Inicio',
  },
  {
      id: 2,
      path: '/category/remeras',
      name: 'Productos',
  },
  {
      id: 3,
      path: '/category/camisas',
      name: 'Pago',
  },
 
];

const NavBar = () => {
  return (
    <header>
        <img src={Logo} alt="Logo provisorio" />
        <h1><span>👨‍💻</span>Mi tienda Jiménez <span>👨‍💻</span></h1>
       <ul>
        {categories.map((category)=> (
          <Link to = {category.path} key = {category.id}>
            {category.map}
          </Link>
        ))}
       </ul>
        <CartWidget/>
    </header>
  )
}

export default NavBar