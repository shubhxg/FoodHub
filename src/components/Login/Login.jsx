import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="md:h-full py-16 md:flex md:items-center md:justify-center bg-gray-100 min-w-screen">
      <div className="bg-white border-8 border-slate-100 hover:border-rose-500 pr-8 rounded-3xl md:shadow-[0_35px_60px_-30px_rgba(0,0,0,0.2)] transition transform ease-in-out duration-500 w-auto md:flex md:items-center justify-start gap-8">
        <div>
          <figure>
            <img
              className="md:w-96 object-cover md:rounded-l-2xl md:block hidden"
              src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="food image"
            />
          </figure>
        </div>
        <div className="form-container w-3/5 p-8">
          <h2 className="text-2xl font-bold text-rose-600 mb-6 underline underline-offset-2">
            Login to FoodPalace
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2 text-sm"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="xxxxxxxxx"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
