import React from 'react'
import navbar from './Navbar.module.css'
import icons from './Navicon'
function importAll(r) {
    return r.keys().map(r);
  }
  
  
  function Navbar() {
  return (
      
      <div className={navbar.main}>
        <div><h2>My Wallet</h2></div>
        <div><input className={navbar.inputClass} type="text" placeholder='Search' /></div>
        <div className={navbar.icons}>
        {icons.map((values,index)=>{
            return(
                <>
                    <img src={values.img} alt="" />
                </>
            )
        })}
        </div>
        <div >
            <button className={navbar.button} >Generate Report</button>
        </div>

    </div>
  )
}

export default Navbar