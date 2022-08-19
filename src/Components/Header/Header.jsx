import React from 'react'
import header from './Header.module.css'
import Creditcard from '../Creditcard/Creditcard'
import Option from '../Options/Option'
import Payment from '../PaymentHistory/Payment'
import Bill from '../Bill/Bill'
function Header() {
  return (
    <div className={header.main}>
        <div className={header.left}>
        <Creditcard/> 
        <Payment/> 
        </div>
        <div className={header.right}><Option/>
        <Bill/>
        </div>
    </div>
  )
}

export default Header