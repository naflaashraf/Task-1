import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import XYZ from '../../Assets/XYZ.png'
function Header() {
  return (
    <div className='main '>
        <left-side>
        <img src={logo} alt='logo' className='logo'></img>
        </left-side>
            
        <div className='right-side'>
          <img src={XYZ}className='XYZ' alt='XYZ'></img>
          <p>XYZ Enterprises Pvt.Ltd</p>
        </div>
        
    </div>
  )
}

export default Header
