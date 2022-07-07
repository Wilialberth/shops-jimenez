import React,  {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const products = {id:'01', name:'random1', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/200', stock:5};

export const ItemDetailContainer = () =>{
  const [data, getData] = useState ([]);

  useEffect (()=>{
    const getData = new Promise (resolve =>{
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
    getData.then(res => setData (res));
  },[])

  return(
    <ItemDetail data= {data} />
  )
}





