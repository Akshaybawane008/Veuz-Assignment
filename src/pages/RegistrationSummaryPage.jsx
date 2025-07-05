import React from "react";
import TopBottom from "../components/TopBottom";
import RegistrationSummary from "../components/RegistrationSummary";
import ProgressBar from "../components/ProgressBar";

const RegistrationSummaryPage = () => {
  return (
    <>
      <div>
        <TopBottom />
      </div>
      <div className="page-bg">
         <ProgressBar/>
        <RegistrationSummary />
      </div>
      <div>
        <TopBottom />
      </div>
    </>
  );
};

export default RegistrationSummaryPage;
