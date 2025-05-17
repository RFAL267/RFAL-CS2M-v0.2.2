import { useState } from "react";
import IconCoin from "../components/icons/icon.coin";
import "../css/page.main.css"
import svgTapMe from "../assets/svg/tapme.svg"
import NavBar from '../components/navbar'
import { useNavigate } from "react-router-dom";
import { handleCoinClick } from "../utils/coinHandler"; // функция отдельно
//  UserWenApp Context
import { useUser } from "../context/UserContext";
// -
const PageMain = () => {
  // -
  const {user} = useUser();
  // -
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const onCoinClick = () => {
    handleCoinClick({ balance, setBalance, clickCount, setClickCount });
  };

  return (
    <section className="page_main">
      <div className="coin_info">
        {/*  */}
        <h1>Telegram ID: {user ? user.id : ""}</h1>
        <img src={user ? user.avatar : ""} />
        {/*  */}
        <button className="coin_btn" onClick={onCoinClick}>
          <IconCoin />
        </button>
        <img className="tapme" src={svgTapMe} />
        <p>CSM Tangalar</p>
        <article>
          Tangalarni sotib oling va ularni Counter Strike 2 uchun g‘iloflar, stikerlar va skinlarga almashtiring.
        </article>
      </div>

      <div className="balance">
        <button className="counter" onClick={onCoinClick}>
          <IconCoin />
          <span>{balance}</span>
        </button>
        <p>sizning balans</p>
        <button className="balance_btn" onClick={() => navigate("/buy")}>
          Balansni toldirish
        </button>
      </div>

      <div className="tasks">
        <p>VAZIFALAR</p>
        <div className="list">
          <div className="task">
            <div className="content">
              <p>CS oynaydigan dostingizni chaqiring</p>
              <div className="prize">
                <span>+500</span>
                <IconCoin />
              </div>
            </div>
            <button className="btn">Taklif qilish</button>
          </div>
          <div className="task">
            <div className="content">
              <p>CSM Community-ga Obuna bolish</p>
              <div className="prize">
                <span>+100</span>
                <IconCoin />
              </div>
            </div>
            <button className="btn">Obuna bolish</button>
          </div>
        </div>
      </div>

      <NavBar />
    </section>
  );
};

export default PageMain;
