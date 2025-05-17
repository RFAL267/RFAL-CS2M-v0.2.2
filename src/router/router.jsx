import { Routes, Route } from 'react-router-dom';
import PageMain from '../pages/page.main';
import PageCases from '../pages/page.cases';
import PageProfile from '../pages/page.profile';
// -
import PageBuy from '../pages/page.buy';
import CaseSpinner from '../pages/case.spinner';
import PageItem from "../pages/page.item";
import PageWithdraw from "../pages/page.withdraw";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/cases" element={<PageCases />} />
      <Route path="/profile" element={<PageProfile />} />
      <Route path="/buy" element={<PageBuy />} />
      <Route path="/case_spinner" element={<CaseSpinner />} />
      <Route path="/item" element={<PageItem />} />
      <Route path="/withdraw" element={<PageWithdraw />} />
    </Routes>
  );
}
