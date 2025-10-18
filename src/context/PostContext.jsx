import { createContext,useState,useEffect } from "react";

export const PostContext = createContext()

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        try {
            let saved = localStorage.getItem("posts")
            if (!saved || saved === "undefined") {
                return [];
            }
            else {
                return saved && JSON.parse(saved)
            }
        } catch (error) {
            console.log(error)
        }
    });

    useEffect(() => {
        console.log(posts)
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts])

    return(
        <PostContext.Provider value={{posts,setPosts}}>
            {children}
        </PostContext.Provider>
    )
}