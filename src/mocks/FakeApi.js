const products = [
    {id:'01', name:'random1', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/200', stock:5},
    {id:'02', name:'random2', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/201', stock:15},
    {id:'03', name:'random3', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/202', stock:7},
    {id:'04', name:'random4', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/204', stock:10},
    {id:'05', name:'random5', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/205', stock:4},
    {id:'07', name:'random7', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/204', stock:4},
    {id:'08', name:'random8', description:"Estamos renovando para ti", Precio: '$2500', img:'https://picsum.photos/200', stock:4},

    
  ]

  export const getData = new Promise ((resolve, reject) =>{
  
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },2000)
  })