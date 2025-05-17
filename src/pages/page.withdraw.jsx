// page.withdraw.jsx
import "../css/page.withdraw.css"
import gif from "../assets/gif/arrow_down.gif"

const PageWithdraw = () => {

  return (
    <section className="page_withdraw">
        <div className="link_form">
            <img src={gif} />
            <p>Tovarlarni qayerga jo'natish kerak?</p>
            <span>
            Kosonlar, stikerlar va dekallar savdo havolasi orqali yuboriladi. 
            <font>
                Steam savdo sahifasida savdo havolasini toping
            </font>
            </span>
            {/* link */}
            <textarea name="user_steam_trade" id="1" placeholder="https://steamcommunity.com/tradeoffer/new/?partner=1234567890&token=FlAx91il" rows="4"/>
            <button className="send_btn">
                Saqlash
            </button>
        </div>
    </section>
  );
};

export default PageWithdraw;
