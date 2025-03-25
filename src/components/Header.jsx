import React from 'react';
import { Logo1_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="absolute top-4 left-10 z-10">
      <img 
        src={Logo1_URL}
        alt="Netflix Logo" 
        className="lg:w-44 md:w-32 sm:w-24 w-12"
      />
    </div>
  );
};

export default Header;
