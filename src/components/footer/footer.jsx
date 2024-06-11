import './footer.scss'

import { Link } from 'react-router-dom';

import logo from '../../assets/photos/logo.svg'

function Footer(){
    return (
        <footer>
            <div className="footer_container">

                <div className="footer_mainInfo">
                    <Link to="/" className="footer_logoGroup">
                        <img src={logo} alt="Logo" />
                        
                        <h1 className="footer_logoGroup_text">ksu academy</h1>
                    </Link>

                    <div className="footer_mainInfo_info">
                        Академія представляє широкі можливості для комунікації та взаємодії 
                        учасників навчального процесу. система створює і зберігає портфоліо 
                        кожного учня: всі здані ним роботи, всі повідомлення у форумі, всі 
                        оцінки і коментарі викладача до робіт.
                    </div>
                </div>


                <div className="footer_columnLinks">
                    <ul className="footer_columnLinks_mainLinks">
                        <li><Link>Про нас</Link></li>
                        <li><Link>Новини</Link></li>
                        <li><Link>Наша команда</Link></li>   
                        <li><Link>Робота у нас</Link></li>   
                    </ul>

                    <ul className="footer_columnLinks_contacts">
                        <li>Контакты</li>
                        <li><Link>Новини</Link></li>
                        <li><Link>Наша команда</Link></li>
                        <li><Link>Наша команда</Link></li>
                    </ul>

                    <ul className="footer_columnLinks_courses">
                        <li>Курси</li>
                        <li><Link>Дошкільна освіта</Link></li>
                        <li><Link>Математика</Link></li>
                        <li><Link>Комп'ютерні науки</Link></li>
                        <li><Link>Мистецтво</Link></li>
                        <li><Link>Біологія</Link></li>
                        <li><Link>Економіка</Link></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer;