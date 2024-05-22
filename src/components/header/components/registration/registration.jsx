import { Link } from 'react-router-dom'
import './registration.scss'
import { GoogleLogin } from '@react-oauth/google'


// import logo from '../../../../assets/photos/logoExample.png'
import logo2 from '../../../../assets/photos/logo2.png'

function Registration(){
    return(
        <div className="regstration">

            <div className="header_registrationGroup_notAuthorized">
                <GoogleLogin
                    onSuccess={(authData)=>{
                        console.log(authData)
                    }}
                    onError={()=>[
                        console.log("ERROR WHILE  AUTH")
                    ]}
                />
            </div>

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