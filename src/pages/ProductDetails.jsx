import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

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
        </div>
      </div>
      {/* <div>
        <p>
          Rating:{" "}
          <span
            className={results.rating > 3.5 ? "text-green-500" : "text-red-500"}
          >
            {results.rating}
          </span>
        </p>
      </div> */}
      <div className="grid md:grid-cols-2 gap-3 items-center my-3 w-full">
        <div></div>
        <div className="bg-gray-100 rounded-md px-3">
          <h1 className="text-3xl font-semibold">Customer's Feedback</h1>
          {/* customer 1 */}
          <p className="font-semibold">{results.reviews[0].reviewerName}</p>
          <p>Ratings: {results.reviews[0].rating}</p>
          <p>Comment: {results.reviews[0].comment}</p>
          {/* customer 2 */}
          <br />
          <p className="font-semibold">{results.reviews[1].reviewerName}</p>
          <p>Ratings: {results.reviews[1].rating}</p>
          <p>Comment: {results.reviews[1].comment}</p>
          <br />
          {/* custmer 3 */}
          <p className="font-semibold">{results.reviews[2].reviewerName}</p>
          <p>Ratings: {results.reviews[2].rating}</p>
          <p>Comment: {results.reviews[2].comment}</p>
        </div>
      </div>

      {/* using map method */}
      <div className="grid md:grid-cols-2 gap-3 items-center my-3 w-full">
        <div></div>
        <div>
          {results.reviews.map((review, id) => (
            <p key={id}>
              <span className="font-semibold">{review.reviewerName}</span>:{" "}
              {review.comment} <br />
              Ratings: {review.rating}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
