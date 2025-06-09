const products = [
    {
    id:"1",
    title:"SmartWatch Apollo",
    text:"Reloj inteligente, Sumergible y de bateria duradera.",
    price:"47.000",
    img:"/assets/apollo.jpg",
    stock:"20",
    category:"relojes"
    },
  {
    id:"2",
    title:"Auricular Casco Paris Negro",
    text:"Auricular Bluetooth P47 Vincha Micro Sd Radio Fm Inalámbrico",
    price:"18.000",
    img:"/assets/cascoParis.jpeg",
    stock:"10",
    category:"auriculares"
    },
  {
    id:"3",
    title:"Auriculares F9-5 TWS Negro",
    text:"Los auriculares in-ear inalámbricos F9-5 ofrecen una experiencia de sonido de alta calidad.",
    price:"15.755",
    img:"/assets/f9-4tws.png",
    stock:"7",
    category:"auriculares"
    },
]

function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000); 
    });
}

export default getProducts;