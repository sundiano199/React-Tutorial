import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from 'react';




const BackToTop = () => {
    const [isVisible, setIsVisbible] = useState (false);
    
    useEffect (()=> {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const height = window.innerHeight;

            setIsVisbible(scrollPosition > height)
        }

        // attach a scroll eventlistener
        window.addEventListener("scroll", handleScroll)

        //clean up function
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    if (!isVisible) {
        return null;
    }

  return (
    <a href="#top">
     <button className="h-20 w-20 rounded-full bg-black flex items-center justify-center fixed bottom-8 right-8"><FaArrowUp size={40} className='text-white'/></button> 
     </a>
  )
}

export default BackToTop