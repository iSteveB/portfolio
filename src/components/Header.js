import React from "react";
import Navigation from "./Navigation";
import SocialNetwork from "./SocialNetwork";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <SocialNetwork />
    </div>
  );
};

export default Header;
