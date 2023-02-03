import './header.scss'

import logo from '../../photos/logo.svg'
import courses from '../../photos/courses.svg'
import burger from '../../photos/burgerMenu.svg'

import Search from './components/searchBar.jsx'

function Header(){
    return(
        <header>
            <div className="header_container">
                <div className="header_inner">
                    <a href="main" className="logo_group" >
                        <img src={logo} alt="logo" />
                        <span>ksu academy</span>
                    </a>

                    <div className="searchbar_and_courses">
                        <Search></Search>

                        <div className="courses">
                            <span>Курси</span>
                            <img src={courses} alt="course" />
                        </div>
                    </div>

                    <div className="account">
                        <div className="login_join">
                            <a href='#' className='login'>Вхід</a>
                            <a href='#' className='join'>Реєстрація</a>
                        </div>
                    </div>

                    <button className="burger">
                        <img src={burger} alt="burger" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;