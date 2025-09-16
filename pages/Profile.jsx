import React from "react";
import { useFetch } from "../src/hooks/useFetch";
import Loader from "../src/components/Loader";
import { Link } from "react-router-dom";

const url = "https://dummyjson.com/products";
const Profile = () => {
  const { isLoading, isError, results } = useFetch(url);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl">Welcome Back User!</h1>

      <h1 className="text-center text-2xl font-bold">List of products</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {results.products.map((product) => {
          return (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="max-w-[330px] border rounded-lg p-2">
                <img src={product.thumbnail} alt="" />
                <p className="font-semibold">{product.title}</p>
                <p className="text-xl">{product.price}</p>
                
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
