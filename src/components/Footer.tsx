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
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Footer;
