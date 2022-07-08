import React from "react";

function BasicInfo() {
  return (
    <div className='namecard basic-infor'>
      <h1>Jingjie Jiang</h1>
      <p className='basic-infor job-title'>Software Engineer</p>
      <ul className='basic-infor contact-info'>
        <li>
          <button>Email</button>
        </li>
        <li>
          <button>LinkedIn</button>
        </li> 
      </ul>
    </div>
  )
}

export default BasicInfo;