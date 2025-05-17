// page.cases.jsx
import "../css/page.item.css"
import IconCoin from "../components/icons/icon.coin";
import IconSteam from "../components/icons/icon.steam";
import IconShare from "../components/icons/icon.share";
import imgItem from "../assets/img/usp.png"
// navbar
import { useNavigate } from "react-router-dom";
// =
const PageCases = () => {
  const navigate = useNavigate();
  return (
    <section className="page_item">
        <div className="header">
            <img className="bg_img" src={imgItem} />
            <div className="item">
                <img src={imgItem} />
                <div className="title">
                    <p>USP-S</p>
                    <span>Flashback (Minimal Wear)</span>
                </div>
            </div>
            {/* - */}
            <div className="options">
                <button>
                    <IconCoin/>
                    sotish
                </button>
                <button onClick={()=>{navigate("/withdraw")}}>
                    <IconSteam/>
                    chiqarib olish
                </button>
                <button>
                    <IconShare/>
                    ulashish
                </button>
            </div>
        </div>
        {/* = */}
        <div className="item_info">
            <div className="details">
                <div className="row">
                    <div className="title">
                        Owner
                    </div>
                    <div className="value">
                        User Name
                    </div>
                </div>
                <div className="row">
                    <div className="title">
                        Wear
                    </div>
                    <div className="value">
                        Minimal Wear
                    </div>
                </div>
                <div className="row">
                    <div className="title">
                        Rarity
                    </div>
                    <div className="value">
                        Minimal Wear
                    </div>
                </div>
                <div className="row">
                    <div className="title">
                        StatTrack
                    </div>
                    <div className="value">
                        ---
                    </div>
                </div>
                 <div className="row">
                    <div className="title">
                        Price
                    </div>
                    <div className="value">
                        999 <IconCoin/>
                    </div>
                </div>
                <div className="row">
                    <div className="title">
                        Status
                    </div>
                    <div className="value">
                        ---
                    </div>
                </div>
            </div>

        </div>
        <div className="btns">
            <button className="sell_btn">
                Sotish
            </button>
        </div>

    </section>
  )
};
export default PageCases;