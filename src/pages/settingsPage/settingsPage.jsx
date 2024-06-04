import './settingsPage.scss'

import imgChange from '../../assets/photos/addPhoto.svg'

function SettingsPage(){
    return(
        <div className="settingsPage">
            <div className="settingsPage_container">

                {/* замена ника */}
                <div className="settingsPage_nicknameChange">
                    <span>Змінити нікнейм</span>

                    <div className="settingsPage_nicknameChange_dev">
                        <input type="text" placeholder='НОВИЙ НІКНЕЙМ'/>
                        <button>Змінити</button>
                    </div>
                </div>

                {/* замена авы */}
                <div className="settingsPage_avatarChange">
                    <span>Змінити аватар</span>

                    <div className="settingsPage_avatarChange_dev">
                        <div className="settingsPage_avatarChange_customInput">
                            <img src={imgChange} alt="imgChange" />
                            <input type="file" />
                        </div>

                        <button>Змінити</button>
                    </div>
                </div>

                {/* выход из  аккаунта */}
                <div className="settingsPage_logOut">
                    <button>Вийти з аккаунту</button>
                </div>

                {/* удалить аккаунт */}
                <div className="settingsPage_accountDelete">
                    <button disabled = {true}>Видалити аккаунт</button>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage