import { Link } from 'react-router-dom';
import useCheckMobileScreen from '../utils/useCheckMobileScreen';
import { ReactComponent as MenuIcon } from './menu-icon.svg';

const Navigation = () => {
  const isMobileView = useCheckMobileScreen(768);

  return (
    <nav className="navBar">
      <Link to="/">Your Logo</Link>
      {isMobileView ? (
        <MenuIcon />
      ) : (
        <ul>
          <li>About Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
