import { useState } from 'react';
import baza1 from '../assets/images/baza 1.png';
import Logo from '../assets/images/Group (1).png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-full sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-4/5 bg-white rounded-lg shadow-lg overflow-hidden h-[640px]">
        {/* Left Side (Image) */}
        <div className="w-1/2 lg:w-2/3 hidden lg:block">
          <img
            className="w-full h-auto object-cover"
            src={baza1}
            alt="Left Side Image"
          />
        </div>
        {/* Right Side (Content) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="max-w-md w-full">
            <img
              className="w-24 h-auto mb-8 "
              src={Logo}
              alt="Logo"
            />
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6 text-center ">Nice to see you again!</h2>
            {/* Form Inputs */}
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">Email or Phone Number</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 h-10 bg-gray-100 px-4"
                  placeholder="Enter your email or phone number"
                />
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 h-10 bg-gray-100 px-4"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 1.414A4.98 4.98 0 0 1 10 9a4.98 4.98 0 0 1 2.293-.293 1 1 0 0 1 1.414 1.414A6.98 6.98 0 0 0 10 11c-1.832 0-3.415.89-4.414 2.293a1 1 0 1 1-1.414-1.414A8.98 8.98 0 0 1 10 9a8.98 8.98 0 0 1 4.414 1.707 1 1 0 1 1-1.242 1.566C10.862 11.746 8.005 13 5 13a10.97 10.97 0 0 1-3.965-.746A1 1 0 1 1 1.793 10.22 12.97 12.97 0 0 1 5 9c1.832 0 3.415-.89 4.414-2.293a1 1 0 0 1 1.414 1.414A8.98 8.98 0 0 0 5 11a8.98 8.98 0 0 0 4.414 1.707A1 1 0 1 1 9.658 14.22 10.97 10.97 0 0 1 5 15a10.97 10.97 0 0 1-4.965-1.152A1 1 0 0 1 0 13a12.97 12.97 0 0 1 4.207-3.22 1 1 0 0 1 1.414 1.414A10.97 10.97 0 0 0 1 13a10.97 10.97 0 0 0 4.793 2.848 1 1 0 0 1 .414 1.938A12.97 12.97 0 0 1 1 15c-3.005 0-5.862-1.254-7.965-3.293A12.97 12.97 0 0 1 5 7a12.97 12.97 0 0 1 6.965 1.707 1 1 0 0 1 .07 1.497 1 1 0 0 1-1.497.07A10.97 10.97 0 0 0 5 9a10.97 10.97 0 0 0 6.207 2.848 1 1 0 0 1 .414 1.938A12.97 12.97 0 0 1 5 11c-1.832 0-3.415.89-4.414 2.293A1 1 0 0 1 0 12.586a12.97 12.97 0 0 1 7-2.293c1.832 0 3.415.89 4.414 2.293A1 1 0 0 1 10.414 15a1 1 0 0 1-1.242-1.566A10.97 10.97 0 0 0 9 11a10.97 10.97 0 0 0-4.793-2.848A1 1 0 1 1 3.172 6.88 12.97 12.97 0 0 1 9 9c1.832 0 3.415.89 4.414 2.293A1 1 0 0 1 14 11.414a1 1 0 0 1-.707-.293 10.97 10.97 0 0 0-4.707-2.293z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm-.473 5.066a2 2 0 0 1 2.946 0l1.31 1.566a2 2 0 0 1-2.946 2.668l-1.31-1.566a2 2 0 0 1 0-2.668zM7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {/* Remember me and Forgot Password */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember_me"
                    name="remember_me"
                    className="rounded text-emerald-600 focus:ring-emerald-400"
                  />
                  <label htmlFor="remember_me" className="ml-2 text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800">Forgot password?</a>
              </div>
              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-semibold rounded-md py-2 transition duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
              >
                Sign in
              </button>
              {/* Sign In with Google */}
              <button
                type="button"
                className="mt-2 w-full bg-white border border-gray-300 text-gray-700 font-semibold rounded-md py-2 transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
              >
                <span className="inline-block mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path> </svg>
                </span>
                Sign in with Google
              </button>
            </form>
            {/* Don't have an account */}
            <div className="flex justify-center items-center mt-6 text-gray-700">
              <span>Don't have an account?</span>
              <a href="#" className="text-emerald-600 ml-2 font-semibold hover:text-emerald-800">Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
