import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const userSchema = yup.object().shape({
    fullname: yup.string().required("Full Name is required"),
    username: yup.string().required("username is required"),
    email: yup
      .string()
      .email("Invalid Email Address")
      .required("Email is required"),
  });

const ThirdPartyForm =() => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(userSchema)
  });
  const handleAddUser  = (data) => {
    console.log(data);
    
  }
return (
      <div>
        <form
          onSubmit={handleSubmit(handleAddUser)}
          className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl p-3"
        >
          <h1 className="mb-3 text-2xl font-semibold">Enter Details</h1>

          <input
            type="text"
            className="w-full p-2 block mb-2 rounded-md border"
            placeholder="Full name"
            name="fullname"
            {...register("fullname")}
          />
          <p className="text-red-500 text-sm">{errors.fullname?.message}</p>
          <input
            type="text"
            className="w-full p-2 block mb-2 rounded-md border"
            placeholder="Username"
            name="username"
            {...register("username")}
          />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
          <input
            type="email"
            className="w-full p-2 block mb-2 rounded-md border"
            placeholder="Email Address"
            name="email"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 mt-3 cursor-poointer"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default ThirdPartyForm