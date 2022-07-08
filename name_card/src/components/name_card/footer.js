import React from "react";

function Footer() {
  return (
    <div className='namecard-footer'>
      <ul className='namecard-footer contact-list'>
        <li>
          <a href="https:www.google.com">
            <img src='/images/linkedIn.png' alt='linkedin'></img>
          </a>
        </li>
        <li>
          <a href="https:www.google.com">
            <img src='/images/github.png' alt='github'></img>
          </a>
        </li> 
        <li>
          <a href="https:www.google.com">
          <img src='/images/email.png' alt='email'></img>
          </a>
        </li> 
      </ul>
    </div>
  )
}

export default Footer;