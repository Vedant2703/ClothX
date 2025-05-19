import React from "react";

function CartContents() {
  const cartProducts = [
    {
      productID: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productID: 2,
      name: "Jeans",
      size: "32",
      color: "Blue",
      quantity: 2,
      price: 40,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productID: 3,
      name: "Hoodie",
      size: "L",
      color: "Black",
      quantity: 1,
      price: 30,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productID: 4,
      name: "Cap",
      size: "One Size",
      color: "Green",
      quantity: 3,
      price: 10,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productID: 5,
      name: "Sneakers",
      size: "9",
      color: "White",
      quantity: 1,
      price: 60,
      image: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-contain mr-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
