import { Link } from 'react-router-dom'
import './registration.scss'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { setUser, clearUser } from '../../../../redux/userSlice'

// import logo from '../../../../assets/photos/logoExample.png'
import logo2 from '../../../../assets/photos/logo2.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function Registration(){

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const login = useGoogleLogin({
        onSuccess: async (data) =>{
            localStorage.setItem('access_token', data.access_token)         //заносим аксес токен от регистрации
            
            // после этого мы отправляем данные на сервер и получаем данные пользователя (если первый раз, то записываем в бд)
            const resData = await axios.post('http://localhost:1000/user', {access_tocken: data.access_token}).then(({data})=> data)
            
            // ЗАНЕСТИ В РЕДАКС НОВОЕ
            
            const user = {
                user_nickName: resData[0].user_nickName,
                user_imgUrl: resData[0].user_imgUrl,
                user_role: resData[0].user_role,
                user_id: resData[0].user_id,
                user_email: resData[0].user_email
            }
            console.log("SETING USER IN REDUX STORE")
            dispatch(setUser(user))
        },
        onError: error => {
            console.log(error)
        }
    })

    const logout = () => {
        googleLogout()
        localStorage.setItem('access_token', null)
        dispatch(clearUser())
    }

    console.log(user.user_email)

    return(
        <div className="regstration">

            {/* <div className="header_registrationGroup_notAuthorized">
                <GoogleLogin
                    onSuccess={(authData)=>{
                        console.log(authData)
                    }}
                    onError={()=>[
                        console.log("ERROR WHILE AUTH")
                    ]}
                />
            </div> */}

            {user.user_email === null && <button onClick={login}>ВХОД</button>}
            <button onClick={logout}>ВЫХОД</button>
            {user.user_email !== null && 
                <Link className="header_registrationGroup_Authorized" to="/profile">
                    <div className="registrationGroup_Authorized_container">
                            
                        <div className="registrationGroup_Authorized_nickname">
                                longnicklongnicklongnicklongnick
                        </div>
                            
                        <img src={logo2} alt="" />
                            
                    </div>
                </Link>
            }


        </div>
    )
}

export default Registration