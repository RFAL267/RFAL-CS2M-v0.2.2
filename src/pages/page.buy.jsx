// page.cases.jsx
import "../css/page.buy.css"
import IconCoin from "../components/icons/icon.coin";
import { useNavigate } from "react-router-dom";

const coinPacks = [
  { id: 1, amount: "10,000", price: "10,000 UZS" },
  { id: 2, amount: "25,000", price: "23,000 UZS" },
  { id: 3, amount: "50,000", price: "45,000 UZS" },
  { id: 4, amount: "100,000", price: "85,000 UZS" },
  { id: 5, amount: "150,000", price: "120,000 UZS" },
  { id: 6, amount: "200,000", price: "160,000 UZS" },
  { id: 7, amount: "500,000", price: "250,000 UZS" },
];

const PageBuy = () => {
  const navigate = useNavigate();

  return (
    <section className="page_buy">
      <div className="header">
        <IconCoin />
        <div className="gr">
          <p>Sotib olish</p>
          <article>
            Qancha tanga sotib olishni xohlayotganingizni tanlang.
          </article>
        </div>
      </div>

      {/* buy packs */}
      <div className="packs">
        {coinPacks.map(pack => (
          <button className="pack" key={pack.id}>
            <div className="coins">
              <IconCoin />
              <span className="count">{pack.amount}</span>
            </div>
            <span className="price">{pack.price}</span>
          </button>
        ))}
      </div>

      <p className="info_text">
        Kristallarni sotib olish orqali siz <span>CSM</span> shartlariga rozilik bildirasiz.
      </p>
    </section>
  );
};

export default PageBuy;
