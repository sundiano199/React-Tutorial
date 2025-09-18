import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const redirect = useNavigate(); // for navigation
  const [error, setError] = useState("");
  const {setUser} = useAppContext();

  const handleLogin = (data) => {
    const { email, password } = data; // we're destructuring here
    if (email !== "user@google.com" || password !== "user1234") {
      setError("Invalid Credentials");
    } else {
      // after a server action
      setUser(email)
      redirect("/profile");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="max-w-[400px] p-3 mx-auto my-4 shadow-xl rounded-lg"
      >
        <h1 className="text-2xl mb-2.5 font-semibold">Login to continue</h1>
        <p className="text-red-500">{error}</p>
        <input
          type="email"
          className="border p-2 rounded-lg block w-full"
          placeholder="Email Address"
          {...register("email")}
        />
        <input
          type="password"
          className="border p-2 rounded-lg block w-full mt-3 5"
          placeholder="Password"
          {...register("password")}
        />
        <button className="bg-black text-white w-full p-3 rounded-lg mt-4 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
