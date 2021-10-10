import React from "react";
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import { faFacebookF } from '../../../../node_modules/@fortawesome/free-brands-svg-icons';
import { faInstagram } from '../../../../node_modules/@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '../../../../node_modules/@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />

    return (
        <>
        <div className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__container--aboutme">
                    <h3>Dyrygent <span>Martyna Zych</span></h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="contact__container">
                <div className="contact__container--contact">
                    <h3>Kontakt</h3>
                    <p>email: <span>martynazy&#99;h&#46;&#99;on&#100;uctor&#64;g&#109;ail&#46;com</span></p>
                    <div className="contact__socialMedia">
                        <div className="socialMedia"><a href="https://www.facebook.com/martyna.zych.12">{facebook}</a></div>
                        <div className="socialMedia"><a href="https://www.instagram.com/martyna.zych_conductor/">{instagram}</a></div>
                        <div className="socialMedia"><a href="https://www.linkedin.com/in/martyna-zych-b69a4514a/">{linkedIn}</a></div>
                    </div>
                    

                </div>
            </div>
        </div>
        <footer className="contact__footer">
            <p>Created by <a href ="https://www.linkedin.com/in/baranowska-anna/">Anna Baranowska</a></p>
        </footer>
        </>
    )
}

export default Contact;