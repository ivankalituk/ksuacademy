import './settingsPage.scss'

import imgChange from '../../assets/photos/addPhoto.svg'
import { useState } from 'react'
import { useRequest } from '../../hooks/hook'
import { updateUserNickname, updateUserImg } from '../../api/user'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setUserNickname, setUserImgPath} from '../../redux/userSlice'
import { googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

function SettingsPage(){

    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()

    
    const [selectedImgFile, setSelectedImgFile] = useState(null)        //сохранение файла фото
    const [selectedImg, setSelectedImg] = useState(null)                //сохранение ссылки на фото
    const [nickname, setNickname] = useState('')                        //для инпута никнейма

    const navigate = useNavigate()

    // функция изменения никнейма
    const {mutatedFunc: putUserName} = useRequest({fetchFunc: updateUserNickname})

    // замена фотографии
    // Для отображения смены фото нужно перезагружать страницу
    const {mutatedFunc: putUserImg, data: newImgPath} = useRequest({fetchFunc: updateUserImg})

    // замена ника
    const nicknameChange = async () => {
        console.log(nickname)

        // добавить сам запрос изменения
        await putUserName({user_id: user.user_id, user_nickname: nickname})

        // заменить никнейм в редаксе
        dispatch(setUserNickname({user_nickName: nickname}))

        // очищение поля ввода нового никнейма
        setNickname('')
    }

    // отловить изменение инпут файла
    const handleInputImgChange = (event) => {
        const file = event.target.files[0]
        setSelectedImgFile(file)
        const reader = new FileReader()

        reader.onload = () => [
            setSelectedImg(reader.result)
        ]

        reader.readAsDataURL(file)
    }

    // замена фото
    const handleImgChange = async () => {
        if (selectedImgFile !== null){
            const data = new FormData()

            data.append('user_id', user.user_id)
            data.append('photo', selectedImgFile)

            console.log(data)

            await putUserImg(data)
        }
    }

    // выйти из аккаунта
    const handleLogOut = () => {
        
        localStorage.setItem('access_token', null)          // очистить локал сторедж
        dispatch(clearUser())                               // очистить редакс стор
        googleLogout()                                      // выйти с гугл аккаунта
        // выйти со страницы и перейти на главную
        navigate('/')
    }

    return(
        <div className="settingsPage">
            <div className="settingsPage_container">

                {/* замена ника */}
                <div className="settingsPage_nicknameChange">
                    <span>Змінити нікнейм</span>

                    <div className="settingsPage_nicknameChange_dev">
                        <input type="text" placeholder='НОВИЙ НІКНЕЙМ' value={nickname} onChange={(event) => {setNickname(event.target.value)}}/>
                        <button onClick={nicknameChange}>Змінити</button>
                    </div>
                </div>

                {/* замена авы */}
                <div className="settingsPage_avatarChange">
                    <span>Змінити аватар</span>

                    <div className="settingsPage_avatarChange_dev">
                        <div className="settingsPage_avatarChange_customInput">
                            <img src={imgChange} alt="imgChange" />
                            <input type="file" onChange={handleInputImgChange} />
                        </div>

                        <button onClick={handleImgChange}>Змінити</button>
                    </div>
                </div>

                {/* выход из  аккаунта */}
                <div className="settingsPage_logOut">
                    <button onClick={handleLogOut}>Вийти з аккаунту</button>
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