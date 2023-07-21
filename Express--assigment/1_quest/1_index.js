const http = require('http');

const port = 3090;
const hostname = "Hruthik";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to Men & Women Dummy Data");
    }else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(menProducts));
    }else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(womenProducts));
    }else if (req.url === '/other') {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("page Not Found");
    }
})

server.listen(port, () => {
    console.log(`server running on ${hostname}:${port}`);
})

// console.log(allProducts);



const menProducts = [
    {
      id: 1,
      name: "Men's T-Shirt",
      price: 25.99,
      category: "Clothing",
      gender: "Men",
    },
    {
      id: 2,
      name: "Men's Jeans",
      price: 49.99,
      category: "Clothing",
      gender: "Men",
    },
    {
      id: 3,
      name: "Men's Sneakers",
      price: 69.99,
      category: "Shoes",
      gender: "Men",
    },
    {
      id: 4,
      name: "Men's Watch",
      price: 119.99,
      category: "Accessories",
      gender: "Men",
    },
    {
      id: 5,
      name: "Men's Backpack",
      price: 39.99,
      category: "Accessories",
      gender: "Men",
    },
    {
      id: 6,
      name: "Men's Hoodie",
      price: 34.99,
      category: "Clothing",
      gender: "Men",
    },
    {
      id: 7,
      name: "Men's Running Shoes",
      price: 79.99,
      category: "Shoes",
      gender: "Men",
    },
    {
      id: 8,
      name: "Men's Belt",
      price: 24.99,
      category: "Accessories",
      gender: "Men",
    },
    {
      id: 9,
      name: "Men's Dress Shirt",
      price: 45.99,
      category: "Clothing",
      gender: "Men",
    },
    {
      id: 10,
      name: "Men's Wallet",
      price: 19.99,
      category: "Accessories",
      gender: "Men",
    },
  ];
  
  const womenProducts = [
    {
      id: 11,
      name: "Women's Dress",
      price: 39.99,
      category: "Clothing",
      gender: "Women",
    },
    {
      id: 12,
      name: "Women's Handbag",
      price: 29.99,
      category: "Accessories",
      gender: "Women",
    },
    {
      id: 13,
      name: "Women's Heels",
      price: 54.99,
      category: "Shoes",
      gender: "Women",
    },
    {
      id: 14,
      name: "Women's Necklace",
      price: 45.99,
      category: "Jewelry",
      gender: "Women",
    },
    {
      id: 15,
      name: "Women's Sunglasses",
      price: 19.99,
      category: "Accessories",
      gender: "Women",
    },
    {
      id: 16,
      name: "Women's Blouse",
      price: 29.99,
      category: "Clothing",
      gender: "Women",
    },
    {
      id: 17,
      name: "Women's Sandals",
      price: 39.99,
      category: "Shoes",
      gender: "Women",
    },
    {
      id: 18,
      name: "Women's Earrings",
      price: 15.99,
      category: "Jewelry",
      gender: "Women",
    },
    {
      id: 19,
      name: "Women's Scarf",
      price: 24.99,
      category: "Accessories",
      gender: "Women",
    },
    {
      id: 20,
      name: "Women's Sweater",
      price: 49.99,
      category: "Clothing",
      gender: "Women",
    },
  ];
  
