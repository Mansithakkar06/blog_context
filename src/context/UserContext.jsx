import { createContext, useEffect, useState } from "react";
export const UserContext=createContext()

export const UserProvider=({children})=>{
    const [users,setUsers]=useState(()=>{
        try {
            let saved=localStorage.getItem("users");
            if(!saved || saved==="undefined"){
                return []
            }
            else{
                return JSON.parse(saved)
            }
        } catch (error) {
            console.log("user error",error)
        }
        })

        
    const signup=(user)=>{
        const saved=JSON.parse(localStorage.getItem("users"))||[];
        setUsers([...saved,user])
        localStorage.setItem("users",JSON.stringify(users));
        login(user)
    }

    const login=(user)=>{
        localStorage.setItem("loggedin",JSON.stringify(user))
        
    }
    useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(users))
    },[users])

    // useEffect(() => {
    //     localStorage.removeItem("users")
    // }, []);
    return <UserContext.Provider value={{users,setUsers,signup,login}}>
        {children}
    </UserContext.Provider>
}