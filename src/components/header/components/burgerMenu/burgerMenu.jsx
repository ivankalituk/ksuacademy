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
                            <Link to="/courses"><h1>Назва предмету</h1></Link>

                            <ul>
                                <li><Link to="/chapter"><h2>Розділ</h2></Link></li>
                                <li><Link to="/chapter"><h2>Розділ</h2></Link></li>
                                <li><Link to="/chapter"><h2>Розділ</h2></Link></li>
                                <li><Link to="/chapter"><h2>Розділ</h2></Link></li>
                                <li><Link to="/chapter"><h2>Розділ</h2></Link></li>
                                <li><Link to="/chapter"><h2>Розділ</h2></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default BurgerMenu;