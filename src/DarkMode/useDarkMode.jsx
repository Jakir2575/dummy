import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        const savedMode = localStorage.getItem("DarkMode")
        return savedMode ? JSON.parse(savedMode) : false
    });

    useEffect(()=>{
       localStorage.setItem("DarkMode", JSON.stringify(isDarkMode))
       if(isDarkMode){
        document.body.classList.add("dark-mode")
       } else{
        document.body.classList.remove("dark-mode")
       }
    },[isDarkMode])

    const togglrDarkMode= () => {
        setIsDarkMode(preMode=>!preMode)
    }


  return [isDarkMode, togglrDarkMode]
}

export default useDarkMode
