import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">Your Logo</Link>
        <p>{`©  2021  Company Name
          All rights reserved`}</p>
      </div>

      <ul>
        <li>Explore</li>
        <li>About Us</li>
        <li>Cities</li>
        <li>Call</li>
      </ul>
    </div>
  );
};

export default Footer;
