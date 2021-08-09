import { NavLink, withRouter } from "react-router-dom";
import './AppHeader.css'

function _AppHeader(props) {

  return (
    <div className="app-header">
      <nav>
        <NavLink activeClassName="active-nav" exact to="/" >Home</NavLink>
        <NavLink activeClassName="active-nav" to="/stats" >Statistics</NavLink>
        <NavLink activeClassName="active-nav" to="/contact" >Contacts</NavLink>
        <NavLink activeClassName="active-nav" to="/contact/edit/:id?" >Add Contact</NavLink>
      </nav>
    </div>
  )
}

export const AppHeader = withRouter(_AppHeader)


