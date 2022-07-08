import React,  {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'; 
import { useParams } from 'react-router-dom';


const products = {id:'01', name:'random1', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/200', stock:5};

const ItemDetailContainer = () =>{
  const [data, setData] = useState ({});

  const {id} = useParams();

  useEffect (()=>{
    const getData = new Promise (resolve =>{
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
    getData.then(res => setData (res));
  },[id])

  return(
    <ItemDetail data= {data} />
  )
}

export default ItemDetailContainer 