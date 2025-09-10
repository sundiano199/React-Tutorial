import React from "react";

const Conditional = () => {
  const cart = ["bag"];
  const isLoggedIn = false; // for ternary operator example
  const isError = false; //to explain short circult evaluation
  const ratings = 2 // to explain how useful ternary operation can be useful for classnames


  if (cart.length === 0) {
    return <h1>CART IS EMPTY</h1>;
  }

  return (
    <div>
      <h1>
        PRODUCT IS IN THE CART
      </h1>
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      {isError && <p>something went wrong</p> }
      <p className={ratings >= 5 ? "text-green-500" : "text-red-500"}>Rating {ratings}</p>
    </div>
  );
};

export default Conditional;
