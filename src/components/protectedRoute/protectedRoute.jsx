import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({isRoleNeeded}){
    const user = useSelector((state) => state.user)
    console.log(user)
    
    function protection(){
        if (user.user_email){
            console.log("GOT EMAIL")
            if(isRoleNeeded){
                if(user.user_role === "teacher"){
                    return <Outlet />
                } else {
                    return <>
                        {alert('Ви не маэте ролі викладача')}
                        <Navigate to={'/'}/>
                    </>
                }
            } else {
                return <Outlet />
            }
        } else {
            return<>
                {alert('Ви не авторизовані, пройдіть будь ласка авторизацію')}
                <Navigate to={'/'}/>
            </>
        }
    }

    return protection()
};

export default ProtectedRoute