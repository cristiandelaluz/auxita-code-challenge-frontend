import React from 'react';
import { Heart } from 'react-feather';

const AppFooter = (props) => {
  return(
    <footer className="footer">
      <div className="footer-content">
        Made with <Heart className="text-secondary" /> by Cristian DE LA LUZ
      </div>
    </footer>
  );
};

export default AppFooter;