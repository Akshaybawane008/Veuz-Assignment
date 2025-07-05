import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketPage from "./pages/TicketPage";
import Registration from "./pages/Registration";
import FormPage3 from "./pages/FormPage3";
import FormPage2 from "./pages/FormPage2";
import Successpage from "./pages/Successpage";
import RegistrationSummaryPage from "./pages/RegistrationSummaryPage";
import SelectProduct from "./components/SelectProduct";

const AppRouters = () => (
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TicketPage />} />
      <Route path="/registerform" element={<Registration />} />
      <Route path="/page2" element={<FormPage2 />} />
      <Route path="/page3" element={<FormPage3 />} />
      <Route path="/registersummurypage" element={<RegistrationSummaryPage/>} />
      <Route path="/success" element={<Successpage/>} /> 
      <Route path="/selectproduct" element={<SelectProduct/>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouters;
