import React from "react";
import option from "./Option.module.css";
import img1 from '../Header/opticons/1.png'
import img2 from '../Header/opticons/2.png'
function Option() {
  return (
    <div className={option.main}>
      <div><h5>Wallet Balance</h5>
      <h3>Wallet Balance</h3>
      <h5>-10% than last week</h5>
      </div>
      <div className={option.option}>
        <div className={option.optitem} >
            <img src={img1} alt="" />
            <h6>Send Invoices</h6>
        </div>
        <div className={option.optitem} >
            <img src={img2} alt="" />
            <h6>Transfer</h6>
        </div>
      </div>
    </div>

  );
}

export default Option;
