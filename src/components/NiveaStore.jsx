import React from 'react'
import { niveaProducts } from './data'
import Singleproducts from "./Singleproducts";

const NiveaStore = () => {
  return (
    <div>
        <div className="bg-orange-400 flex items-center justify-between px-3">
        <h1 className="font text-xl">
          Nivea Official Store | Brand Festival Deals
        </h1>
        <a href="">See all {">"}</a>
      </div>
      <div className="flex items-center gap-3">
        {niveaProducts.map((product) => {
            return <Singleproducts key={product.id} {...product} />;
        })}
      </div>
    </div>
  )
}

export default NiveaStore