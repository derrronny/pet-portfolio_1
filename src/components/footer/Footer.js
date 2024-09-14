import linkedin from "./../../img/linkedinicon.png"
import github from "./../../img/githubicon.png"
import tg from "./../../img/tgicon.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://google.com"><img src={linkedin} alt="." width="36px" height="36px"/></a></li>
                        <li className="social__item"><a href="https://google.com"><img src={github} alt="." width="36px" height="36px"/></a></li>
                        <li className="social__item"><a href="https://google.com"><img src={tg} alt="." width="36px" height="36px"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
