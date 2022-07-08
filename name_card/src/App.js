import './App.css';

import Footer from './components/name_card/footer';
import BasicInfo from './components/name_card/basic-info';
import AboutInfo from './components/name_card/about-info';
import InterestsInfo from './components/name_card/interests-info';

function NameCard() {
  return (
    <div className="namecard">
      <div className='namecard profile-image'></div>
      <BasicInfo />
      <AboutInfo />
      <InterestsInfo />
      <Footer />
    </div>
  );
}

export default NameCard;
