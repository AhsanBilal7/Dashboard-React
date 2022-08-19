import React, { useRef } from "react";
import credit from "./Creditcard.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import data from "./wsdata";
import Chart from "./Chart";
import Third from "./Thirdchart";
//   export default BasicExample;
function Creditcard() {
  return (
    <>
      <div className={credit.main}>
        <div className={credit.one}>
        <div className={credit.oneitem} >
          <h5>Main Balance</h5>
        </div>
         <div className={credit.oneitem} > <h2>$864,333.07</h2></div>

          <div className={credit.oneitem} >
            <h6>Valid Thrus</h6>
            <p>03/25</p>
          </div>
          <div className={credit.oneitem} >
            <h6>Card Holder</h6>
            <p>Ahsan Bilal</p>
          </div>
          <div className={credit.oneitem} ><h6>**** **** **** 4563</h6></div>
        </div>
        <div className={credit.two}>
          <ProgressBar variant="info" animated now={60} />
        </div>
        <div className={credit.three}>
          <div>
            <h4 style={{ color: "white" }}>Weekly Summary</h4>
            <div className={credit.mapdiv}>
              {data.map((values, index) => {
                return (
                  <>
                    <div className={credit.mapitem}>
                      <div
                        style={{ backgroundColor: values.color }}
                        className={credit.clippath}
                      ></div>
                      <h7>{values.value}</h7>
                      <h7>{values.percentage}</h7>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={credit.chart}>
            {" "}
            <Chart />{" "}
          </div>
          <div className={credit.Third}>
            {" "}
            <Third />
          </div>
        </div>
      </div>
    </>
  );
}

export default Creditcard;
