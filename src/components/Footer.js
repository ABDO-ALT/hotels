import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul className="footer list-group">
        {props.footerData.map(el => (
          <li key={el}>{el} </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
