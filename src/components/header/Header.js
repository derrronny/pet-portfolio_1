const Header = () => {
    return (
        <header className="header">           
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <span>Yosha</span></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>Genius <span id="billionaire">Billionaire</span> Playboy Philanthropist</p>
                </div>
                <a href="https://google.com" className="btn">Download CV</a>
            </div>
        </header>
    );
}

export default Header;
