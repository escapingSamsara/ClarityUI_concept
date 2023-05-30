import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <div className={`main-wrapper ${theme}`}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={`app-container ${theme}`}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <MainSection toast={toast} theme={theme} />
      </div>
    </div>
  )
}

export default App
