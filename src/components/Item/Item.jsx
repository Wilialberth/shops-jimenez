import React from 'react'
import {Link} from  'react-router-dom';


const Item = ({product}) => {
  
  

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={product.img} className="card-img-top" alt={name}/>
    <div className="card-body">
        <h2> {product.id} </h2>
        <p className="card-text">{product.name}</p>
        <p className="card-text">{product.description}</p>
    </div>
    <button className='btn btn-primary'>Ver más</button>
    <Link to={`/detail/${product.id}`}>Ver detalle</Link>
</div>
  )
}

export default Item