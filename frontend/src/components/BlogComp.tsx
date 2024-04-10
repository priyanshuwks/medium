

export function BlogComp(){
    return (
        <div className="flex flex-col pb-2 border-b border-gray-500">
            <div className="flex items-center">
                <Avatar />
                <p className="mr-1">Raman Kumar.</p>
                <Circle />
                <p className="ml-1">April 08, 2024</p>
            </div>
            <div className="mx-3 text-3xl font-extrabold">
                This is the Title
            </div>
            <div className="mx-3 font-light">
                This is the content of the blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci eos vitae, temporibus laborum quam? Magni blanditiis odit nihil iste quo, unde inventore, saepe ut numquam molestias earum, labore dicta!
            </div>
        </div>
    )
}

const Avatar = () => {
    return (
        <div className="mx-3 m-2 h-7 w-7 bg-gray-200 rounded-full ring-2 ring-rose-100 flex justify-center items-center">
            RK
        </div>
    )
}

const Circle = () => {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500">

        </div>
    )
}