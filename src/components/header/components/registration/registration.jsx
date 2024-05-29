import { Link } from 'react-router-dom'
import './registration.scss'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'


// import logo from '../../../../assets/photos/logoExample.png'
import logo2 from '../../../../assets/photos/logo2.png'
import axios from 'axios'

function Registration(){

    const login = useGoogleLogin({
        onSuccess: (data) =>{
            console.log(data.access_token)
            console.log(axios.post('http://localhost:1000/user', {access_tocken: data.access_token}))
        },
        onError: error => {
            console.log(error)
        }
    })

    const logout = () => {
        googleLogout()
         console.log(axios.post('http://localhost:1000/user', {access_tocken: 'ya29.a0AXooCgupMbU3XWWN9z0zLK6fm1OCbbfe90jWyv9Tce4P6V0lliwdKgiYmPH3URLTWg5OzTyWzTAmVe3rby7h69No9LP3S0uY8zKzsJ4hHRyTlQBtLo2PbCm9cx7mB_YgYkc9t2y7rHEFknbpGG5MkiRzlTgkgUG_iJoaCgYKAVQSARASFQHGX2Mi5Lp77nwNmsPiznq3qwXbzA0170'}))
    }

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

            <button onClick={login}>ВХОД</button>
            <button onClick={logout}>ВЫХОД</button>
            <Link className="header_registrationGroup_Authorized" to="/profile">

                <div className="registrationGroup_Authorized_container">
                    
                    <div className="registrationGroup_Authorized_nickname">
                        longnicklongnicklongnicklongnick
                    </div>
                    
                    <img src={logo2} alt="" />
                    
                </div>
            </Link>

        </div>
    )
}

export default Registration