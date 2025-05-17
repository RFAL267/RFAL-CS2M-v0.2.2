// page.profile.jsx
import "../css/page.profile.css"
import imgProfile from "../assets/img/picture.png"
import imgItem from "../assets/img/usp.png"
import IconLink from "../components/icons/icon.link";
import IconAdmin from "../components/icons/icon.admin";
import IconChevronRight from "../components/icons/icon.chevron.right"
import IconCoin from "../components/icons/icon.coin";
// navbar
import NavBar from '../components/navbar'
import { useNavigate } from "react-router-dom";
// -
//  UserWebApp Context
import { useUser } from "../context/UserContext";
// -
const PageProfile = () => {
  const {user} = useUser();
  const navigate = useNavigate();
   const items = Array.from({ length: 9 });
  return (
    <section className="page_profile">
      {/* header */}
        <div className="header">
          <img
            className="user_img"
            src={user?.avatar ? user.avatar : imgProfile}
            alt="User avatar"
          />
          <p className="user_name">{user?.name || "User Name"}</p>
          <div className="user_menu">
            {/* get skin */}
            <button onClick={()=>{navigate("/withdraw")}}>
              <div className="c">
              <IconLink/>
              <span>
                Trade Link
              </span>
              </div>
              <IconChevronRight/>
            </button>
            {/* admin */}
            <button>
              <div className="c">
              <IconAdmin/>
              <span>
                Admin bilan aloqa
              </span>
              </div>
              <IconChevronRight/>
            </button>

          </div>
        </div>
        {/* - */}
        {/* Skins */}
        <div className="user_items">
          <p className="title">YUTUQLAR</p>
          <div className="items_grid">
            {items.map((_, index) => (
              <button className="item" key={index} onClick={() => navigate("/item")}>
                <img className="item_bg" src={imgItem} alt="bg" />
                <div className="content">
                  <img className="item_img" src={imgItem} alt="item" />
                  <div className="gr">
                  <p className="item_title">USP-S</p>
                  <span className="item_subtitle">Flashback (Minimal Wear)</span>
                  </div>
                  <div className="price">
                    <IconCoin />
                    <span className="value">999</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
<NavBar/>
    </section>
    
  )
};
export default PageProfile;
