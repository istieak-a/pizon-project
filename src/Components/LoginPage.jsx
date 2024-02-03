import React, { useState } from "react";

const LoginPage = () => {
  const actualUsername = "admin";
  const actualPassword = "admin";

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const handleLogin = () => {
    // Check if the entered username and password match the actual ones
    if (inputUsername === actualUsername && inputPassword === actualPassword) {
      alert("Login successful!");

      // Navigate to the new homepage after successful login
      window.location.href = "/generate-new";
    } else {
      // Show error modal
      setErrorModal(true);
    }
  };

  const closeErrorModal = () => {
    setErrorModal(false);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Login to continue</h1>
      <input
        type="text"
        placeholder="Email"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        className="mb-2 w-64 rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        className="mb-4 w-64 rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={handleLogin}
        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Login
      </button>

      {/* Error Modal */}
      {errorModal && (
        <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <div className="rounded bg-white p-6 shadow-md">
            <p className="mb-3 font-semibold text-red-600">
              Incorrect username or password. Please try again.
            </p>
            <button
              onClick={closeErrorModal}
              className="rounded bg-blue-500 px-4 py-2 text-white focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
