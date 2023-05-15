import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
        <NavLink to='/'><h1>Notes</h1></NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    
  )
}
