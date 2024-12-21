import React from "react";
import logo from "../../assets/images/網站Logo.svg";
const FooterComponent = () => {
  return (
    <footer>
      <section className="py-5 d-flex flex-column justify-content-center align-items-center">
        <img className="w-50" src={logo} alt="網站logo"></img>
        <h3 className="text-white fs-1">日本旅遊網</h3>
      </section>
    </footer>
  );
};

export default FooterComponent;
