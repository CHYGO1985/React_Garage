import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function NameCard() {
  return (
    <div className="namecard">
      <div className='namecard profile-image'></div>
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
      <div className='namecard about-info'>
        <h3>About</h3>
        <p>I like computer science.</p>
      </div>
      <div className='interests-info'>
        <h3>Interests</h3>
        <p>I enjoying football, tennis, music, history.</p>
      </div>
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
    </div>
  );
}

export default NameCard;
