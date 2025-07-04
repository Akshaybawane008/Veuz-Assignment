import React from "react";
import TopBottom from "../components/TopBottom";
import Success from "../components/Success";

const Successpage = () => {
  return (
    <>
      <div>
        <TopBottom />
      </div>
      <div className="page-bg">
        <Success />
      </div>
      <div>
        <TopBottom />
      </div>
    </>
  );
};

export default Successpage;
