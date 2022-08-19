import React from "react";
import bill from "./Bill.module.css";
import img1 from "./images/1.png";
import billoption from "./billdata.js";
function Bill() {
  return (
    <div>
      <div className={bill.main}>
      <h4>Invoice Sent</h4>
      <hr />
        {billoption.map((values, index) => {
          return (
            <>
              <div className={bill.mainitem}>
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <h6>{values.name}</h6>
                  <p>{values.payment}</p>
                </div>
                <div>
                  <h5>{values.dollar}</h5>
                </div>
              </div>
              <hr style={{ color: "white" }} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Bill;
