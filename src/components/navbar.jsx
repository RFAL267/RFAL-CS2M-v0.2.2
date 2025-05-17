import "../css/navbar.css";
// icons
import IconWallet from "./icons/icon.wallet";
import IconStore from "./icons/icon.store";
import IconProfile from "./icons/icon.profile";
// react-router
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "0", icon: <IconWallet /> },
    { path: "/cases", label: "Keyslar", icon: <IconStore /> },
    { path: "/profile", label: "Profil", icon: <IconProfile /> },
  ];

  return (
    <div className="main_navbar">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`nav_btn ${location.pathname === item.path ? "active_nav" : ""}`}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
