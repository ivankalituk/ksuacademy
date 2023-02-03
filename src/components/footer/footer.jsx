import './footer.scss'

import logo from '../../photos/logo.svg'


function Footer(){
    return(
        <div className="footer">
            <div className="footer_container">
                <div className="footer_inner">

                    <div className="main_info">

                        <a className="logo_group" href='#'>
                            <img src={logo} alt="logo" />
                            <span>Ksu academy</span>
                        </a>

                        <p className="info">
                            Академія представляє широкі можливості для комунікації та взаємодії учасників 
                            навчального процесу. система створює і зберігає портфоліо кожного учня: всі здані 
                            ним роботи, всі повідомлення у форумі, всі оцінки і коментарі викладача до робіт.
                        </p>

                    </div>

                    <div className="links">
                        <div className="main_links">
                            <a href="#">Sample link</a>
                            <a href="#">Sample link</a>
                            <a href="#">Sample link</a>
                            <a href="#">Sample link</a>
                            <a href="#">Sample link</a>
                        </div>

                        <div className="theme_links">
                            <div className="theme_name">Theme name</div>
                            
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                        </div>

                        <div className="theme_links">
                            <div className="theme_name">Theme name</div>

                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>
                            <a href="#">Theme link</a>                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;