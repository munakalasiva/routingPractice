import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-items">
    <div className="wave">
      <img
        className="nav-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>

    <ul className="list-items">
      <li className="color">
        <Link to="/">Home</Link>
      </li>

      <li className="color">
        <Link to="/about">About</Link>
      </li>

      <li className="color">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
