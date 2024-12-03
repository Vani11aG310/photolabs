import React from "react"

const DarkModeButton = (props) => {

  const { setDarkMode, darkMode } = props;

  const handleClick = () => {
    if (!darkMode) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  return (
    <button onClick={handleClick}>Turn on dark mode!</button>
  )

}

export default DarkModeButton