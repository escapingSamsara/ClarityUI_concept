import logo from '../../assets/figma_logo.png'
import './Navbar.css'
const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo-box">
          <div className="logo-box">
            <img src={logo} alt="LOGO" className="navbar-logo" />
          </div>
          <h3 className="navbar-brand">ClarityUI</h3>
        </div>
        <div className="navbar-list-box">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#">Features</a>
            </li>
            <li className="navbar-item">
              <a href="#">Pricing</a>
            </li>
            <li className="navbar-item">
              <a href="#">Support</a>
            </li>
          </ul>
          <div className="join-btn-box">
            <button
              onClick={toggleTheme}
              type="button"
              className={`theme-toggle-btn ${theme}`}
            >
              <i
                className={`${
                  theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
                }`}
              ></i>
            </button>
            <button type="button" className="join-btn">
              Join Email List
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
