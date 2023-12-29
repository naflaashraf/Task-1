import React from 'react'
import './LeftSide.css'
import profile from '../../Assets/profile.jpg'
function LeftSide() {
  return (
    <div className='leftSide'>
      <div className='profile'>
        <img src={profile} alt="profile" />
        <h4>Nafla <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" className='arrow'>
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" strokeWidth="50" />
        </svg></h4>
        <p>nafla@gmail.com</p>
      </div>
      <div className='list'>
        <div className='content' style={{backgroundColor:'  rgb(23, 194, 251)'}}>
          <p>Dashboard</p>
        </div>
        <div className='content'>
          <p>Perks</p>
        </div>
        <div className='content'>
          <p>Addons</p>
        </div>
        <div className='content'>
          <p>FAQ</p>
        </div>
        <div className='content'>
          <p>Support</p>
        </div>
        <div className='logout'>
          <p>Logout <span class="glyphicon">&#xe017;</span></p>
      </div>
      </div>
     
    </div>
  )
}

export default LeftSide
