import React from "react";
import leftbar from "./Leftbar.module.css";
import img1 from "../../Resources/Group 33.png";
import img2 from "../../Resources/1.png";
import greeting from "./data.js";
import { options } from "./data.js";

function Leftbar() {
  console.log(greeting);
  return (
    <>
      <div className={leftbar.main}>
        <div className={leftbar.top}>
          <div className={leftbar.logoimage}>
            <img src={img1} alt="" />
          </div>
          {greeting.map((values, index) => {
            return (
              <>
                <div className={leftbar.greet}>
                  <div className={leftbar.pic}>
                    <img src={img2} alt="" />
                  </div>
                  <div className={leftbar.message}>
                    <h4>{values.message}</h4>
                    <p>{values.email}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={leftbar.bottom}>
        <h4>Welcome to Dashboard</h4>
          {options.map((val, index) => {
            return (
              <>
                <div className={leftbar.bottomOptions}>
                  <div className={leftbar.bottomicon}>
                  {val.iconSource}
                  </div>
                  <div>
                    <h4>{val.text}</h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Leftbar;
