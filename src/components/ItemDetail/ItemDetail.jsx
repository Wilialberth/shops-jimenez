import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

export const ItemDetail = ({data}) => {
  return (
    <div className='container' >
      <div className='detail'>
        <img className='detail__img' src={data.img} alt="Foto de prueba" />
        <div className='content' >
          <h1> {data.description} </h1>
          <h2> {data.precio} </h2>
          <ItemCount stock={data. stock} initial ={1} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail