import { Link } from 'react-router-dom'
import './registration.scss'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { setUser, clearUser } from '../../../../redux/userSlice'

import logo2 from '../../../../assets/photos/logo2.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function Registration(){

    // для редакса
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    // создание 
    const login = useGoogleLogin({
        onSuccess: async (data) =>{
            localStorage.setItem('access_token', data.access_token)         //сохраняем токен    

            // получение юзера
            const resData = await axios.post('http://localhost:1000/user', {access_tocken: data.access_token}).then(({data})=> data)

            // заносим в редакс юзера
            const user = {
                user_nickName: resData[0].user_nickName,
                user_imgUrl: resData[0].user_imgUrl,
                user_role: resData[0].user_role,
                user_id: resData[0].user_id,
                user_email: resData[0].user_email
            }
            dispatch(setUser(user))
        },
        onError: error => {
            console.log(error)
        }
    })

    return(
        <div className="regstration">

            {user.user_email === null && <button onClick={login} className="header_registrationGroup_notAuthorized">Авторизація</button>}
            {user.user_email !== null && 
                <Link className="header_registrationGroup_Authorized" to="/profile">
                    <div className="registrationGroup_Authorized_container">
                            
                        <div className="registrationGroup_Authorized_nickname">{user.user_nickName}</div>
                            
                        {/* ЗАМЕНИТЬ ЛОГО */}
                        <img src={user.user_imgUrl? 'http://localhost:1000/' + user.user_imgUrl : logo2} alt="user_logo" />
                            
                    </div>
                </Link>
            }


        </div>
    )
}

export default Registration