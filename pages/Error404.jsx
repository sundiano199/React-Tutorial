import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
      <h1>Error Page</h1>

      <Link to="/">
        <button className='bg-black rounded-md w-23 text-white'>Back Home</button>
      </Link>
    </div>
  );
}

export default Error404