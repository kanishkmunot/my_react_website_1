import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    // For demonstration purposes, set login success to true if username and password are not empty
    if (username && password) {
      setLoginSuccess(true);
      setLoginError(false);
      setLoggedInUserName(username); // Set the user's name
      console.log(`Logging in with ${username} and ${password}`);
    } else {
      setLoginSuccess(false);
      setLoginError(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {loginSuccess ? (
          <div>
            <h2 className="text-3xl font-semibold mb-2 text-center text-gray-800">Welcome back, {loggedInUserName}!</h2>
            <p className="text-lg text-center text-gray-700 mb-6">You have successfully logged in.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
            <form className="flex flex-col space-y-4">
              <label htmlFor="username" className="text-gray-700">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-2 px-4 border border-blue-500 rounded focus:outline-none focus:border-blue-700"
              />

              <label htmlFor="password" className="text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-4 border border-blue-500 rounded focus:outline-none focus:border-blue-700"
              />

              {loginError && (
                <p className="text-red-500 text-sm">Please enter both username and password.</p>
              )}

              <button
                type="button"
                onClick={handleLogin}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Log In
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
