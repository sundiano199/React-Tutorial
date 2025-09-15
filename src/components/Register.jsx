import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

const registerSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must Match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3"
    >
      <h1 className="mb-3 text-2xl font-semibold">Enter Details</h1>
      <div>
        <input
          type="text"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Firstname"
          id="firstname"
          {...register("firstname")}
        />
        <small className="text-red-500">{errors.firstname?.message}</small>
      </div>
      <div>
        <input
          type="text"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Lastname"
          id="lastname"
          {...register("lastname")}
        />
        <small className="text-red-500">{errors.lastname?.message}</small>
      </div>
      <div>
        <input
          type="email"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Email Address"
          id="email"
          {...register("email")}
        />
        <small className="text-red-500">{errors.email?.message}</small>
      </div>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name="password"
          id="password"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Enter Password"
          {...register("password")}
        />
        <button type="button" className="absolute top-3 right-4">
          {show ? <GoEyeClosed /> : <RxEyeOpen />}
        </button>

        <small className="text-red-500">{errors.password?.message}</small>
      </div>
      <div>
        <input
          type="password"
          name=""
          id="confirmPassword"
          className="w-full p-2 block mb-2 rounded-md border"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />

        <small className="text-red-500">
          {errors.confirmPassword?.message}
        </small>
      </div>

      <button
        onClick={() => setShow(!show)}
        type="submit"
        className="w-full bg-blue-500 text-white rounded-md p-2 mt-3 cursor-poointer"
      >
        Submit
      </button>
    </form>
  );
};

export default Register;
