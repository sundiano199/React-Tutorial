import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { useState } from 'react';



const BackToTop = () => {
    const [isVisible, setIsVisbible] = useState (false);
    if (!isVisible) {
        return null;
    }
    
  return (
    <button className="h-20 w-20 rounded-full bg-black flex items-center justify-center fixed bottom-8 right-8"><FaArrowUp size={40} className='text-white'/></button> 
  )
}

export default BackToTop