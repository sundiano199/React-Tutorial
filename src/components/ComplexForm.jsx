import React from "react";
import { useState } from "react";

const ComplexForm = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    //check inouts
    if (!user.fullname.trim() || !user.email.trim() || !user.username.trim()) {
      // set error
      setError("Please fill all fields");
      return;
    }

    // AFTER ACTIONS, CLEAR ALL FIELDS
    setUser({
      fullname: "",
      username: "",
      email: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3"
      >
        <h1 className="mb-3 text-2xl font-semibold">Enter Details</h1>
        <p className="text-red-500 text-sm">{error}</p>
        <input
          type="text"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Full name"
          name="fullname"
          value={user.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="email"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2 mt-3 cursor-poointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplexForm;
