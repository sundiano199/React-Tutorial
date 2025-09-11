import React from "react";
import { useState } from "react";

const SimpleForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //check inputs
    if (!username.trim() || !email.trim()) {
      setError("Please fill the inputs");
      return;
    }

    // user enters valid values - submit the form
    // perform actions
    // clear your input fields
    setEmail("");
    setUsername("");
    setError("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3"
      >
        <input
          type="text"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Comments"
          className="w-full p-2 block mb-2 rounded-md border"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree">Sign up for newsletter</label>
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

export default SimpleForm;
