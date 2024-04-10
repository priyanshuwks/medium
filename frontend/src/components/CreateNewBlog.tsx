import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";


export const CreateNewBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postCreated, setPostCreated] = useState(false);

    const publishPost = async (e : any) => {
        const post = {
            title,
            content
        }
        const token = localStorage.getItem("token");
        const auth_headers = {
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        }
        console.log(auth_headers);
        const newPost = await axios.post(`${BACKEND_URL}/api/v1/blog/`, post, auth_headers);
        if(newPost){
            setPostCreated(true);
        }
        
    }
    return (
        <div className="border flex flex-col w-screen">
            <input onChange={(e) => setTitle(e.target.value)} type="text" className="block w-2/5 px-4 py-2 mx-4 my-1 mt-8 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-700 leading-tight"
            placeholder="Title of the Blog"></input>
            <textarea onChange={(e) => setContent(e.target.value)} rows={6} className="block p-2.5 w-2/3 mx-4 mb-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your description here..."></textarea>
            <div>
                <button onClick={publishPost} className="ml-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Publish post</button>
            </div>
            <div>{postCreated ? "Post created successfully" : ""}</div>
        </div>
    );
}