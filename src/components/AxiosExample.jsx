import React from 'react'
import axios from 'axios'

const url = "dummyjson.com/products"
const AxiosExample = () => {
    const myaxios = axios.create({
        baseURL: "https://dummyjson.com",
        timeout: 5000,
    })
    const getProducts = async () => {
        try {
            const response = await myaxios("/products")
        } catch (error) {
            console.log(error);
            
        }
    }
    getProducts();
    const getSingleProduct = async () => {
        try {
            const response = await myaxios("/products/1")
        } catch (error) {
            console.log(error);
            
        }
    }
    getSingleProduct();
  return (
    <div>AxiosExample</div>
  )
}

export default AxiosExample