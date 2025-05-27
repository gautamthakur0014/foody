import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100">
      <div className="w-full max-w-md bg-sky-200 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block  mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-black  mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <a
              href="#"
              className="  hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="text-center  text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-black hover:underline font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
