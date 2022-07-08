const products = [
    {id:'01', name:'random1', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/200', stock:5},
    {id:'02', name:'random2', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/201', stock:15},
    {id:'03', name:'random3', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/202', stock:7},
    {id:'04', name:'random4', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/204', stock:10},
    {id:'05', name:'random5', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/205', stock:4},
    {id:'07', name:'random7', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/204', stock:4},
    {id:'08', name:'random8', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/200', stock:4},

    
  ]

  export const getDatas = (categoryId) =>{
    return new Promise ((resolve, reject)=>{
      const productosFiltrados = products.filter(
        (data) => data.catefory === categoryId
      );
      setTimeout(()=>{
        categoryId ? resolve (productosFiltrados) : reject (products)
      })
    })
  }

  export const getData = (id) =>{
    return new Promise((resolve) => {
      const productoEncontrado = producto.find(
        (data) => data.is === Number(id)
      );
      setTimeout (()=>{
        resolve(productoEncontrado);
      }, 2000)
    })
  }