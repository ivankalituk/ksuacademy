import './header.scss'

import logo from '../../photos/logo.svg'
import search from '../../photos/search.svg'
import courses from '../../photos/courses.svg'

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
                        <div className="seatchBar">
                            <input type="text" placeholder='Пошук'/>
                            <button>
                                <img src={search} alt="search" />
                            </button>
                        </div>

                        <div className="courses">
                            <span>Курси</span>
                            <img src={courses} alt="course" />
                        </div>
                    </div>

                    <div className="account">
                        <div className="login_join">
                            <button className='login'>Вхід</button>
                            <button className='join'>Реєстрація</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;