import { useState } from "react";
import Quote from "../components/Quote";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {BACKEND_URL} from '../config';

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleButtonClick(e : any){
        try {
            e.preventDefault();
        const toSend = {
            name,
            email,
            password
        }
        console.log(`${name} ${email} ${password}`);
        const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, toSend);
        const data = res.data;
        localStorage.setItem("token", data.jwt);
        navigate('/signin');
        } catch (error) {
            alert("Signup failed!");
        }
        
        
    }
  return (
    
    <div className="flex justify-evenly items-center h-screen w-screen">
      <div className="w-5/12 h-4/6 my-6 border border-gray-400 rounded-md p-4 ">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create an Account
        </h2>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Already have an account? <Link to="/signin" className="underline">Login</Link>
          </span>
        </div> 
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleButtonClick}>
            Register
          </button>
        </form>
      </div>

      <Quote />
    </div>
  );
}
