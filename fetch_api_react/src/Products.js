import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

function Product(){
    const[users, setUsers] = useState([]);
    const getUsers = async() =>{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers()
    }, []);
    return(
        <>
          {users.map(user =>{
              const{id,login, avatar_url} = user;
              return(
                  <div key={id} className="product">
                    <img src={avatar_url} style={{width:"100px", height:"100px", borderRadius:"50%"}} />
                    <h1>{login}</h1>
                  </div>
              );
          })}  
        </>
    );
}
export default Product;