import React from "react";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
  const getProfile = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      setUsers(data)  
      setIsLoading(false);  
      
    } catch (error) {
        console.log(error);
        
    }
  };
  useEffect (() => {
    getProfile();
  }, [])
  if (isLoading) {
    return(
        <h1 className="text-3xl animate-pulse text-center">Loading Profiles... </h1>
    )
  }
  
  
  return <div>
    <h1 className="text-3xl font-bold text-center">USERS PROFILE</h1>
    <div className=" ">
        {/* This is where we map  */}
        {users.map((user) => {
            return (
                <div 
                key={user.id}
                className="py-3 px-4">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <h1 className="text-lg">Email: {user.email}</h1>
                    <h1 className="text-lg">Address: {`${user.address.suite}, ${user.address.street}, ${user.address.street}`}</h1>


                </div>
            )
        })
        }

    </div>
  </div>;
};

export default Users;
