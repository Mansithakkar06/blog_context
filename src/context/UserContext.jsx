import { createContext, use, useEffect, useState } from "react";
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("loggedin"))
        return saved?saved:null;
    });
    const [users, setUsers] = useState(() => {
        try {
            let saved = localStorage.getItem("users");
            if (!saved || saved === "undefined") {
                return []
            }
            else {
                return JSON.parse(saved)
            }
        } catch (error) {
            console.log("user error", error)
        }
    })


    const signup = (user) => {
        const saved = JSON.parse(localStorage.getItem("users")) || [];
        const updated = [...saved, user]
        setUsers(updated)
        localStorage.setItem("users", JSON.stringify(updated));
        login(user)
    }

    const login = (user) => {
        const saved = JSON.parse(localStorage.getItem("users")) || [];
        const found = saved.find((u) => (
            u.username === user.username && u.password === user.password
        ))
        if (found) {
            setCurrentUser(user)
            localStorage.setItem("loggedin", JSON.stringify(found))
            return true;
        }
        else {
            return false
        }

    }
    const logout = () => {
        setCurrentUser(null)
        localStorage.removeItem("loggedin");
    }
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("loggedin"))
        saved && setCurrentUser(saved)
    }, []);
    // useEffect(() => {
    //     localStorage.removeItem("users")
    // }, []);
    return <UserContext.Provider value={{ users, setUsers, signup, login, currentUser, setCurrentUser, logout }}>
        {children}
    </UserContext.Provider>
}