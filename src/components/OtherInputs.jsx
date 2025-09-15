import React from "react";
import { useState } from "react";

const OtherInputs = () => {
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    setPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleRemove = () => {
    setPicture(null);
    setPreview(null);
  };

  return (
    <div>
      <form className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3">
        <label htmlFor="pic">Provide a profile picture</label>
        <input
          type="file"
          name=""
          id=""
          className="border border-black p-2"
          accept="image/*"
          onChange={handleChange}
        />
        {preview && (
          <img
            src={preview}
            alt="selected image"
            className="h-20 w-20 rounded-md border border-black mt-2 object-cover"
          />
        )}
        {preview && (
          <button type="button" onClick={handleRemove}>
            {" "}
            x
          </button>
        )}
      </form>
    </div>
  );
};

export default OtherInputs;
