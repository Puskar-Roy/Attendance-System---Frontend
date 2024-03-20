import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { RegisterFormData } from "../interfaces";


const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-[60%] sm:mx-auto ">
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-400 ubuntu-bold">
          Register
        </h1>
        <div className="w-full flex-1 mt-8">
          <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                placeholder="Name"
                autoComplete="user-name"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Register
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an account?
              <Link
                to="/login"
                className="border-b text-indigo-400 border-gray-500 border-dotted"
              >
                {" "}
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
