import React from 'react'

/// simply means responding to user interactions - click input, submit, hover

const EventHandling = () => {
    const handleClick = () => {
        alert("Welcome user");
    };
    const handleWelcomeUser = (name) => {
        alert (`Welcome ${name}`)
    }
  return (
    <div className='text-center'>
        <h1
        className='text-2xl mb-2'>Event Handling</h1>
        <button  onClick={handleClick} className='cursor-pointer border rounded-lg w-[200px] mx-auto py-3'>Welcome</button>
        <button onClick={() => handleWelcomeUser("Wale")}
            className='cursor-pointer border rounded-lg w-[200px] mx-auto py-3'>Welcome Again
        </button>
    </div>
  )
}

export default EventHandling