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
    <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="text-3xl font-bold mb-4">Login to continue</h1>
  <input 
    type="text" 
    placeholder='Email' 
    value={inputUsername} 
    onChange={(e) => setInputUsername(e.target.value)} 
    className="w-64 p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  />
  <input 
    type="password" 
    placeholder='Password' 
    value={inputPassword} 
    onChange={(e) => setInputPassword(e.target.value)} 
    className="w-64 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  />
  <button 
    onClick={handleLogin} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Login
  </button>
</div>

  );
};

export default LoginPage;
