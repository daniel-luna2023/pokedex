import React from "react";
import "./footer.css"

const FooterPokeball = () => {
  return (
    <section>
      <div className="footer_home1">
        <div className="footer_home1_ball"></div>
      </div>
      <div className="footer_home2">
        <div className="footer_home2_ball" ></div>
        <img className="footer_img" src="/images/Poké_Ball_icon.svg.png" alt="pokeBall" />
      </div>
    </section>
  );
};

export default FooterPokeball;
