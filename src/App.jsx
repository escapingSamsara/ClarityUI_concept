import './App.css'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="main-wrapper">
      <div className="app-container">
        <Navbar />
        <MainSection />
      </div>
    </div>
  )
}

export default App
