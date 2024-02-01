import React, { useState } from 'react';

const LoginPage = () => {
  const actualUsername = "admin";
  const actualPassword = "admin";
  
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = () => {
    // Check if the entered username and password match the actual ones
    if (inputUsername === actualUsername && inputPassword === actualPassword) {
      alert("Login successful!");
      
      // Navigate to the new homepage after successful login
      window.location.href = '/generate-new';
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login to continue</h1>
      <input 
        type="text" 
        placeholder='Email' 
        value={inputUsername} 
        onChange={(e) => setInputUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder='Password' 
        value={inputPassword} 
        onChange={(e) => setInputPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
