import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true');
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400 rounded-lg">
      <div className="w-5 xl:w-4/5 flex bg-gray-100 rounded-lg">
        <div className="w-3/5 p-6 bg-white rounded-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-letter-z-logo-png-png-image_7930755.png"
              alt="Logo"
              className="h-8 mr-4"
            />
          </div>

          <div className="flex justify-center items-center mb-4">
            <span className="text-xl font-semibold">Get Started Now</span>
          </div>

          <p className="flex justify-center items-center m-4 text-sm">
            Enter your credentials to access your account
          </p>

          <div className="flex justify-between mb-4">
            <button className="w-full py-2.5 bg-white border border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-100 mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              Login with Google
            </button>
            <button className="w-full py-2.5 bg-white border border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-100 mb-2">
              <img
                src="https://static-00.iconduck.com/assets.00/apple-logo-icon-1661x2048-8adk63j7.png"
                alt="Apple Logo"
                className="w-6 h-6 mr-2"
              />
              Login with Apple
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-2.5 text-sm border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-2.5 text-sm border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2.5 text-sm border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm">I agree to Terms and Privacy</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
              <br />
              <a className="text-sm text-blue-500 hover:underline">Have an account? <span href="/signup">Sign Up</span></a>
            </div>
          </form>
        </div>

        <div className="w-3/5 bg-blue-500 rounded-lg p-6 flex flex-col justify-between text-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">The simplest way to manage your workforce</h2>
          </div>

          <div className="flex justify-center mb-5 rounded-lg">
            <img
              src="https://img.freepik.com/premium-photo/clean-sleek-unveiling-modern-dashboard-website-with-white-background-color_983420-126277.jpg"
              alt="Workforce Image"
              className="w-4/5 h-5/5 rounded-lg "
            />
          </div>
          <div className="flex justify-center mb-4 px-8 relative gap-5">
            
              <span className="h-8">Spotify</span>
              <span className="h-8">Google</span>
              <span className="h-8">Booking.com</span>
              <span className="h-8">WeChat</span>
              <span className="h-8">Whatsapp</span>
              <span className="h-8">Apple</span>
            </div>
        </div>
      </div>
          
        </div>

      
  );
};

export default Login;
