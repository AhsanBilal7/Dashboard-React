import React from "react";
import payment from "./Payment.module.css";
import img from './images/1.png'
import information from './payapi'
function Payment() {
  return (
    <div className={payment.main}>
      <div className={payment.top}>
        <div>
          <h2>Payment History</h2>
        </div>
        <div className={payment.links}>
          <a href="#">Today</a>
          <a href="#">Weekly</a>
          <a href="#">Monthly</a>
        </div>
      </div>
      <div className={payment.down}>
      {}
        {information.map((value,index)=>{
            return(
                <>
        <div className={payment.downitem}>

         <div> <img src={img} alt="" /></div>
          <div>
            <h6>{value.name}</h6>
            <p>{value.shop}</p>
          </div>
          <div><p>{value.pay}</p></div>
         <div> <p>{value.card}</p></div>
          <div><button style={{backgroundColor : "#5222DC"}}>{value.status?"Approved":"Pending"}</button></div>
        </div>
                </>
            )
        })}
      </div>
    </div>
  );
}

export default Payment;
