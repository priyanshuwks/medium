import { AppBar } from "./AppBar"
import { BlogComp } from "./BlogComp"
import { Publish } from "./Publish"

export const BlogFull = () => {
    const pathname = window.location.pathname;
    return (
        <div>
            <AppBar />
            {pathname == "publish" ? <Publish /> : <BlogComp />}
        </div>
    )
}