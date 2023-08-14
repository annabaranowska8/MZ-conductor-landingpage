import React from "react";
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome";
import { faFacebookF } from "../../../../node_modules/@fortawesome/free-brands-svg-icons";
import { faInstagram } from "../../../../node_modules/@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "../../../../node_modules/@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const facebook = <FontAwesomeIcon icon={faFacebookF} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />;
  const { t } = useTranslation();

  return (
    <>
      <div className="contact" id="contact">
          <div className="contact__container">
            <div className="contact__container--contact">
              <h3>{t("management")}</h3>
              <div className="contact--links">
                <p className="email-address-container">
                  <span className="email-address-text">Natalia Warzecha-Karkus</span>
                </p>
                <p className="email-address-container">
                  <span className="email-address-text">nataliakarkus@gmail.com</span>
                </p>
                <p className="email-address-container">
                  <span className="email-address-text">+48 609 639 023</span>
                </p>
                <div className="contact__socialMedia">
                  <div className="socialMedia">
                    <a href="https://www.facebook.com/martyna.zych.conductor">
                      {facebook}
                    </a>
                  </div>
                  <div className="socialMedia">
                    <a href="https://www.instagram.com/martyna.zych_conductor/">
                      {instagram}
                    </a>
                  </div>
                  <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/martyna-zych-b69a4514a/">
                      {linkedIn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <footer className="contact__footer">
        <div className="photos">
          <p>Photos by Mateusz Żaboklicki, Tomasz Szklany, Piotr Banasik</p>
        </div>
        <div className="developer">
          <p>
            Developed and designed
            <br /> by{" "}
            <a href="https://www.linkedin.com/in/baranowska-anna/">
              Anna Baranowska
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
