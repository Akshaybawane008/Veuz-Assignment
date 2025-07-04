import React from "react";
import TopBottom from "../components/TopBottom";
import RegistrationSummary from "../components/RegistrationSummary";

const RegistrationSummaryPage = () => {
  return (
    <>
      <div>
        <TopBottom />
      </div>
      <div className="page-bg">
        <RegistrationSummary />
      </div>
      <div>
        <TopBottom />
      </div>
    </>
  );
};

export default RegistrationSummaryPage;
