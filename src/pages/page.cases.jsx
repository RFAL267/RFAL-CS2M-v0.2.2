// page.cases.jsx
import "../css/page.cases.css"
import imgCase from "../assets/img/case.png"
import IconCoin from "../components/icons/icon.coin";
// navbar
import NavBar from '../components/navbar'
import { useNavigate } from "react-router-dom";
// =
const PageCases = () => {
  const navigate = useNavigate();
  return (
    <section className="page_cases">
        <div className="page_title">
          <p>Keyslar</p>
          <article>
            Keyslarni oching va Counter Strike 2 uchun skinlar yutib oling
          </article>
        </div>
        {/* cases */}
        <div className="cases">
          {Array.from({ length: 10 }).map((_, index) => (
            <button className="case" key={index} onClick={() => navigate("/case_spinner")}>
              <img src={imgCase} alt="Case" />
              <p className="title">Case Name {index + 1}</p>
              <div className="price">
                <IconCoin />
                500
              </div>
            </button>
          ))}
        </div>
          {/* NavBar */}
          <NavBar/>
    </section>
  )
};
export default PageCases;