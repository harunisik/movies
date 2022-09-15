import { Link } from 'react-router-dom';
import useCheckMobileScreen from '../utils/useCheckMobileScreen';
import { ReactComponent as MenuIcon } from './menu-icon.svg';
import { ReactComponent as ChevronDown } from './chevron-down.svg';

const Navigation = () => {
  const isMobileView = useCheckMobileScreen(768);

  return (
    <nav className="navBar">
      <Link to="/">Your Logo</Link>
      {isMobileView ? (
        <MenuIcon />
      ) : (
        <ul>
          <li>Explore</li>
          <li>About Us</li>
          <li>
            Cities
            <ChevronDown style={{ marginLeft: '5px' }} />
          </li>
          <li style={{ border: '2px solid #FFFFFF', borderRadius: '10px', padding: '0.8vw 3.5vw' }}>Call</li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
