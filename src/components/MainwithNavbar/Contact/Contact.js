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
                    <h3>About <span>Martyna Zych</span></h3>
                    <p>Martyna Zych is very go-getter, energetic and full of passion conductor. During the work she is industrious, precise and indictable person. She speaks English, Czech and Polish.</p>
                </div>
            </div>
            <div className="contact__container">
                <div className="contact__container--contact">
                    <h3>Contact</h3>
                    <div className="contact--links">
                        <p className="email-address-container"><span className="email-text">email: </span><span className="email-address-text">martynazy&#99;h&#46;&#99;on&#100;uctor&#64;g&#109;ail&#46;com</span></p>
                        <div className="contact__socialMedia">
                            <div className="socialMedia"><a href="https://www.facebook.com/martyna.zych.conductor">{facebook}</a></div>
                            <div className="socialMedia"><a href="https://www.instagram.com/martyna.zych_conductor/">{instagram}</a></div>
                            <div className="socialMedia"><a href="https://www.linkedin.com/in/martyna-zych-b69a4514a/">{linkedIn}</a></div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        <footer className="contact__footer">
            <div className="photos">
                <p>Photos by Mateusz Żaboklicki, Tomasz Szklany</p>                
            </div>
            <div className="developer">
                <p>Developed and designed<br/> by <a href ="https://www.linkedin.com/in/baranowska-anna/">Anna Baranowska</a></p>
            </div>
        </footer>
        </>
    )
}

export default Contact;