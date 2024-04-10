import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";


export default function Signin(){
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    });
    async function handleLogin(e : any){
        try{
            e.preventDefault();
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, loginData);
            const data = res.data;
            localStorage.setItem("token", data.jwt);
        }catch(error){
            alert("error occured while Login!");
        }
        navigate('/blog');
    }
    return (
        <div className="flex justify-evenly items-center h-screen w-screen">
            <div className="p-5 w-2/5 h-3/5">
                <div className="text-3xl m-4 ">Welcome to Medium!</div>
                <form className="">
                    <LabelledInput onChange={(e) => {
                        setLoginData({...loginData, email : e.target.value})
                    }} label="Email" placeholder="Enter your email" />
                    <LabelledInput onChange={(e) => {
                        setLoginData({...loginData, password : e.target.value});
                    }} label="Password" placeholder="Enter passworld" />
                    <div className="text-center mt-4">
                    <button 
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</button>
                    </div>
                </form>
                <div className="text-center">
                <button className="bg-green-500 hover:bg-green-600 m-4 text-white font-bold py-2 px-4 rounded">
                    <Link to="/signup">Create new account</Link>
                </button>
                </div>
            </div>
            <div className="flex justify-center items-center p-4 bg-slate-50 w-2/5 h-3/5">
                <NewQuote />
            </div>
        </div>
    )
}
interface labelledInputType{
    label : string,
    placeholder : string,
    onChange : (e : any) => void
}
function LabelledInput({label, placeholder, onChange} : labelledInputType ){
    return <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={onChange}placeholder={placeholder}></input>
    </div>
}

function NewQuote(){
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl font-medium mb-4">The Customer service I received was exceptional. The support team went above and beyond to addresss my concerns.</p>
            <p className="font-semibold">Jules Winnfield</p>
            <p className="font-light text-xs">CEO, Acme Inc</p>
        </div>
    )
}