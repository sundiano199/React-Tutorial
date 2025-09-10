import React from "react";
import { useEffect, useState } from "react";
import { FadeLoader } from 'react-spinners';
const url = "https://dummyjson.com/products?limit=30";
const ComplexEffect = () => {
  const [products, setProducts] = useState([]); // its empty because we haven't specify which data we want to work with or map
  const [isLoading, setIsLoading] = useState(true); // to animate between when you want to fetch and when its dome fectching

  const getProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products); // to check if we have the datas in the console, (not neccesarry in your code, just to check yourself)
      setProducts(data.products); // here we updated the useState to specify that we're only displaying the products alone from the fetched data
      setIsLoading(false); //
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // get products
    getProducts();
  }, []); // empty [] means once
  if (isLoading) {
    return(
        <div>
            <FadeLoader />
        </div>
    )
  }
  return (
    <div>
      <h1 className="text-3xl text-center my-4">Our products</h1>
      <div className="flex items-center gap-3 flex-wrap">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="shadow-xl rounded-md border border-black p-2 w-[330px] h-[410px]"
            >
              <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-full h-[80%]" />

              <h1 className="text-lg">{product.title}</h1>
              <p className="text-lg">{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexEffect;
