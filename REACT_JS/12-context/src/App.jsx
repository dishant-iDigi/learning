import React from 'react'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { themeDataContext } from './context/ThemeContext'

const App = () => {
  const [theme, setTheme] = useContext(themeDataContext);
  const toggle = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <div>
      <Navbar />
      <button
        onClick={() => {
          toggle();
        }}
      >Change theme</button>
    </div>
  )
}

export default App
