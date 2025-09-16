import React from "react";
import { useRef, useEffect } from "react";
// can be used to target DOM nodes/ elements
// ref attribute
// {current: }

const SimpleRef = () => {
  const inputRef = useRef(null);
  const searchRef = useRef(null);
  

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
    
  }

  return (
    <div>
      <form
        action=""
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3 flex gap-1.5 items-center"
      >
        <input
          type="email"
          placeholder="Email Address"
          className="w-full block p-2 mb-2 rounded-md border"
          ref={inputRef}
        />
        <button className="p-2 bg-black text-white rounded-md">Submit</button>
      </form>
      <form
        onClick={handleSearch} // wont make it refresh
        action=""
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3 flex gap-1.5 items-center"
      >
        <input
          type="text"
          placeholder="Search for products"
          className="w-full block p-2 mb-2 rounded-md border"
          ref={searchRef}
        />
        <button className="p-2 bg-black text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default SimpleRef;
