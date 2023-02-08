import './burgerMenu.scss'

import { Link } from "react-router-dom"

function BurgerMenu(){
    return(
        <div className="burgerMenu">
            <div className="menu_container">
                <div className="account">
                    импортировать аккаунт
                </div>

                <div className="cources">
                    <span>Курси</span>
                    <ul>
                        <li>
                            <Link to="/courses">Назва предмету</Link>

                            <ul>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/courses">Назва предмету</Link>

                            <ul>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/courses">Назва предмету</Link>

                            <ul>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                                <li><Link to="/chapter">Розділ</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default BurgerMenu;