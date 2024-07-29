import React from 'react'
import './darkMode.css'
import useDarkMode from './useDarkMode'

const DarkMode = () => {
    const [isDarkMode, togglrDarkMode] = useDarkMode();
  return (
    <div>
      <button onClick={togglrDarkMode}>Dark Mode</button>
    </div>
  )
}

export default DarkMode
