import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">HT</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/review"
          style={{fontFamily: "Old London"}}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          📄
        </NavLink>
        {/* <NavLink
          to="/projects"
          style={{fontFamily: "Old London"}}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          👩🏻‍💻
        </NavLink>
        <NavLink
          to="/about"
          style={{fontFamily: "Old London"}}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          😐
        </NavLink> */}
        <NavLink
          to="/all-reviews"
          style={{fontFamily: "Old London"}}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          ⭐
        </NavLink>
        <NavLink
          to="/contact"
          style={{fontFamily: "Old London"}}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          📞
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
