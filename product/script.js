const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    brand: "ExampleBrand",
    image_url:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145618000",
    description:
      "Powerful laptop with high-performance specs for work and entertainment.",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.5,
    brand: "TechCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Cutting-edge smartphone with advanced features and a sleek design.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 99.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Comfortable headphones with excellent sound quality for immersive listening experiences.",
  },
  {
    id: 4,
    name: "Camera",
    price: 799.0,
    brand: "PhotoTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Professional-grade camera capturing high-resolution photos and videos.",
  },
  {
    id: 5,
    name: "Tablet",
    price: 299.99,
    brand: "TabCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Portable tablet perfect for entertainment and productivity on-the-go.",
  },
  {
    id: 6,
    name: "Smartwatch",
    price: 199.5,
    brand: "WearableTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Smartwatch with health-tracking features and a stylish design.",
  },
  {
    id: 7,
    name: "Desktop Computer",
    price: 1299.0,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-performance desktop computer for demanding tasks and gaming.",
  },
  {
    id: 8,
    name: "Printer",
    price: 149.0,
    brand: "PrintTech",
    image_url: "https://via.placeholder.com/300",
    description: "Versatile printer suitable for both home and office use.",
  },
  {
    id: 9,
    name: "Keyboard",
    price: 49.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Ergonomic keyboard designed for comfortable and efficient typing.",
  },
  {
    id: 10,
    name: "Mouse",
    price: 29.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Responsive and precise mouse for seamless navigation and control.",
  },
  {
    id: 11,
    name: "Speaker System",
    price: 399.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description: "Immersive speaker system delivering rich and clear audio.",
  },
  {
    id: 12,
    name: "External Hard Drive",
    price: 129.0,
    brand: "StorageTech",
    image_url: "https://via.placeholder.com/300",
    description: "High-capacity external hard drive for secure data storage.",
  },
  {
    id: 13,
    name: "Gaming Console",
    price: 399.0,
    brand: "GameTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Next-gen gaming console offering stunning graphics and gaming experiences.",
  },
  {
    id: 14,
    name: "Router",
    price: 79.99,
    brand: "ConnectTech",
    image_url: "https://via.placeholder.com/300",
    description: "Reliable router providing high-speed internet connectivity.",
  },
  {
    id: 15,
    name: "Monitor",
    price: 349.5,
    brand: "DisplayTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-resolution monitor delivering vibrant and clear visuals.",
  },
  {
    id: 16,
    name: "Scanner",
    price: 89.0,
    brand: "ScanTech",
    image_url: "https://via.placeholder.com/300",
    description: "Efficient scanner for digitizing documents and images.",
  },
  {
    id: 17,
    name: "Fitness Tracker",
    price: 79.0,
    brand: "FitTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Fitness tracker monitoring activity levels and health metrics.",
  },
  {
    id: 18,
    name: "Wireless Earbuds",
    price: 129.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Wireless earbuds with premium audio quality and long battery life.",
  },
  {
    id: 19,
    name: "Security Camera",
    price: 199.99,
    brand: "SecureTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-definition security camera for home or business surveillance.",
  },
  {
    id: 20,
    name: "Electric Toothbrush",
    price: 59.5,
    brand: "DentalTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Advanced electric toothbrush for thorough and effective dental care.",
  },
];
let root = document.getElementById("root");
const createCard = (prod) => {
  let card = document.createElement("div");
  card.className = "card";
  let cardImage = document.createElement("img");
  let imageLink = prod.image_url;
  cardImage.src = imageLink;
  card.appendChild(cardImage);
  let title = document.createElement("h1");
  title.innerText = prod.name;
  card.appendChild(title);
  let desc = document.createElement("p");
  desc.innerText = prod.description;
  card.appendChild(desc);
  let price = document.createElement("h2");
  price.innerText = prod.price + "$";
  card.appendChild(price);
  return card;
};
products.map((a) => {
  root.appendChild(createCard(a));
});
const result=createCard(products[0]);
console.log(result);
const removeProd=(name)=>{
  let resultArr=products.filter((a)=>{
    return !(a.name==name)
  });
  for(let i=0; i<resultArr.length; i++){
    resultArr[i].id=i;
  }
  return resultArr
}
const test=removeProd("Camera");
console.log(test)
