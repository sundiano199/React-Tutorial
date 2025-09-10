import React from 'react'
import image1 from "../assets/Figure_1.png"
import image2 from "../assets/img-2.png"

const Hero = () => {
  const myName = 'John Doe'
  return (
    <div>
      <img src="https://dataly-nine.vercel.app/assets/laptop-BkUviYdN.jpg" alt="image" />
      <img src={image1} alt="first-image" />
      <img src={image2} alt="second-image" />
      <h1>{myName}</h1>
      <p>{1 +1}</p>
    </div>
  )
}

export default Hero