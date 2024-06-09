import './profilePage.scss'

import { Link } from 'react-router-dom'

import changeNick from '../../assets/photos/changeNick.svg'
import logo2 from '../../assets/photos/logo2.png'
import { useSelector } from 'react-redux'

function  ProfilePage(){

    const user = useSelector((state) => state.user)

    // АДАПТИВ НЕ РАБОТАЕТ


    return(
        <div className="profilePage">
            <div className="profilePage_container">

                    <div className="profilePage_leftBlock">
                        Прогресс
                    </div>

                    <div className="profilePage_rightBlock">

                        <div className="profilePage_rightBlock_accountInfo">
                
                            <div className="rightBlock_accoutGroup">

                                <img src={user.user_imgUrl? 'http://localhost:1000/' + user.user_imgUrl : logo2} alt="profilePhoto" />

                                <div className="rightBlock_nicknameGroup">
                                    <div className="rightBlock_nicknameGroup_name">
                                        <span>{user.user_nickName}</span>
                                        <Link  to={'/profile/settings'}><img src={changeNick} alt="changeNick" /></Link>
                                    </div>

                                    <div className="rightBlock_nicknameGroup_role">{user.user_role === 'teacher'? 'Профіль вчителя': 'Профіль студента'}</div>
                                </div>
                            </div>

                            <div className="rightBlock_accountInfo_courseInfo">
                                <div className="accountInfo_courseInfo_courseNum">12</div>
                                <div className="accountInfo_courseInfo_courseText">Курсів Пройдено</div>
                            </div>
                        </div>
                        
                        {user.user_role === 'teacher' && <Link to={'/courseDevelopment'} className="rightBlock_changeCourses">+ Змінити Курс</Link>}

                        <div className="rightBlock_progressTables">

                        </div>

                    </div>

            </div>
        </div>
    )
}

export default ProfilePage