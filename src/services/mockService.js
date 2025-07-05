const products = [
  {
    id: "1",
    title: "SmartWatch Apollo",
    text: "Reloj inteligente, Sumergible y de bateria duradera.",
    price: "47.000",
    img: "/assets/apollo.jpg",
    stock: "20",
    category: "relojes"
  },
  {
    id: "2",
    title: "Auricular Casco Paris Negro",
    text: "Auricular Bluetooth P47 Vincha Micro Sd Radio Fm Inalámbrico",
    price: "18.000",
    img: "/assets/cascoParis.jpeg",
    stock: "10",
    category: "auriculares"
  },
  {
    id: "3",
    title: "Auriculares F9-5 TWS Negro",
    text: "Los auriculares in-ear inalámbricos F9-5 ofrecen una experiencia de sonido de alta calidad.",
    price: "15.755",
    img: "/assets/f9-4tws.png",
    stock: "7",
    category: "auriculares"
  },
  {
    id: "4",
    title: "Auricular E6S Negro ",
    text: "Al ser in-ear aíslan el ruido del exterior, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.",
    price: "16.960",
    img: "/assets/e6sNeg.jpg",
    stock: "10",
    category: "auriculares"
  },
  {
    id: "5",
    title: "Smartwatch Zeuz Total Black",
    text: "El Z49 ULTRA cuenta con un bisel metálico color negro mate que no solo lo hace más elegante sino que más resistente y duradero. Contiene una malla de silicona negra.",
    price: "40.000",
    img: "/assets/zeuzTot.png",
    stock: "15",
    category: "relojes"
  },

];

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
  })
}

export default getProducts;