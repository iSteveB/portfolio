import githubIcon from "../assets/images/github.svg"
import emailIcon from "../assets/images/email.svg"
import linkedinIcon from "../assets/images/linkedin.svg"

const SocialNetwork = () => {
    return (
        <div className="social-network">
            <a href="http://google.fr" alt="whatsApp link"><img src={emailIcon} alt="whatsapp-icon"/></a>
            <a href="https://www.linkedin.com/in/steve-basse/" alt="linkedin link"><img src={linkedinIcon} alt="linkedin-icon"/></a>
            <a href="https://github.com/iSteveB" alt="github link"><img src={githubIcon} alt="github-icon"/></a>
        </div>
    );
};

export default SocialNetwork;