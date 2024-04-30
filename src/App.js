import Deals from "./components/deals";
import ControlBillings from "./components/controlBilling";
import NavBar from "./components/header";
import PaymentMethod from "./components/paymentMethod";
import RatingAnalysis from "./components/ratingsAnalysis";
import Services from "./components/services";
import "./index.css";
import PeopleAboutUs from "./components/peopleAboutUs";
import Companies from "./components/companies";
import TryService from "./components/tryService";
import HooFooter from "./components/hooFooter";
function App() {
  return (
    <div className="bg-black pl-[120px]">
      <NavBar />
      <PaymentMethod />
      <RatingAnalysis />
      <Services />
      <ControlBillings />
      <Deals />
      <PeopleAboutUs />
      <Companies />
      <TryService />
      <HooFooter />
    </div>
  );
}

export default App;
