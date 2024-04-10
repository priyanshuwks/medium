import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"

export const AppBar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between px-4 border-b">
            <Link to="/">
                <div className="font-bold text-slate-600 text-2xl">
                    QuickBlog.do
                </div>
            </Link>
            <div className="flex items-center">
                <button onClick={() => navigate('blog/publish')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
                    New
                </button>
                <Avatar />
            </div>
        </div>
    )
}