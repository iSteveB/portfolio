import githubIcon from "../assets/images/icons/github.svg"
import emailIcon from "../assets/images/icons/email.svg"
import linkedinIcon from "../assets/images/icons/linkedin.svg"

const SocialNetwork = () => {
    return (
        <div className="social-network">
            <a href="http://google.fr" alt="whatsApp"><img src={emailIcon} alt="whatsapp-icon"/></a>
            <a href="https://www.linkedin.com/in/steve-basse/" alt="linkedin"><img src={linkedinIcon} alt="linkedin-icon"/></a>
            <a href="https://github.com/iSteveB" alt="github"><img src={githubIcon} alt="github-icon"/></a>
        </div>
    );
};

export default SocialNetwork;