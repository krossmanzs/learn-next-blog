"use client"

import { useState, useEffect} from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light"; // if null, return light instead
    }
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
}