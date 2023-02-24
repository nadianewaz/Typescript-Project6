import React, { useState } from 'react';
import './App.css';

type User = {
  id : number,
  name : string 
}

function App() {
  const [user, setUser] = useState<User>({} as User);

  const handleAddUser = () => {
    setUser( {id : 1, name : "nadia"} )
    console.log(user);
  }
  
  
  return (
    <>
    <button onClick={handleAddUser}>AddUser</button>
    <p>{user.name}</p>
    </>
  );
}

export default App;
