import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClosedCaptioning, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import { handlePdf } from "../utils/fetch";

const Footer = ({ text, contacts }) => {
    return (
        <footer className="footer">
            <div className="social-links">
                <p>Link to my social profile</p>
                <div>
                    <a href={contacts.linkedin.data}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href={contacts.github.data}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={contacts.codeforces.data}>
                        <FontAwesomeIcon icon={faChartSimple} style={{ transform: "scaleX(-1)" }} />
                    </a>
                    <a href={contacts.codechef.data}>
                        <FontAwesomeIcon icon={faClosedCaptioning} />
                    </a>
                    <a href={contacts.twitter.data}>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </div>
            </div>
            <div className="contact-info">
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} /> :{" "}
                    <a href={`mailto:${contacts.email.data}`} className="link-color">
                        {contacts.email.data}
                    </a>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} /> :{" "}
                    <a href={`tel:${contacts.phone.data}`} className="link-color">
                        {contacts.phone.data}
                    </a>
                </div>
            </div>
            <div className="resume-section">
                <div className="resume">CV :</div>
                <button
                    onClick={() => handlePdf(true, "CV_SwetShreet.pdf")}
                    className="link-color"
                    style={{ cursor: "pointer", background: "none", border: "none", padding: 0 }}
                >
                    <FontAwesomeIcon icon={faDownload} />
                </button>
            </div>

            <div className="copyright">&copy; 2023 {text}. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
