import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../src/hooks/useFetch";
import Loader from "../src/components/Loader";

// useParams - used to get access to dynamic route

const ProductDetails = () => {
  const { productId } = useParams();
  const url = `https://dummyjson.com/products/${productId}`;
  const { isLoading, results } = useFetch(url);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="p-4">
      <Link to="/profile" className="bg-black text-white p-2 rounded-lg">
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-3 items-center my-3 w-full">
        <img src={results.images[0]} alt="" className="max-w-[500px] w-full" />
        <div>
          <h1>Product Description</h1>
          <h1 className="text-3xl">{results.title}</h1>
          <h1> Brand: {results.brand}</h1>
          <h2 className="text-xl">${results.price}</h2>
          <p>{results.description}</p>
          <div className="flex gap-2 border p-2 rounded-lg my-2">
            <p>{results.availabilityStatus}</p>
            <p>{results.warrantyInformation}</p>
            <p>{results.ShippingInformation}</p>
          </div>
          <p>Ratings: {results.rating} </p>
        </div>
      </div>
      <div>
        <p>
            Rating:{""}
            <span className={results.rating > 3.5 ? "text-green-500" : "text-red-500"}></span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
