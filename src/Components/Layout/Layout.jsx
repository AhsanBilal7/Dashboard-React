import React from 'react'
import './Layout.css'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar/Rightbar'
function Layout() {
  return (
    <>

    {/* <div>Layout</div> */}
    <div className="container">
<div className="left"><Leftbar/></div>
<div className="right"><Rightbar/></div>

    </div>
    </>
  )
}

export default Layout