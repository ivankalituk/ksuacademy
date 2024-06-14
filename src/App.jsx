import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import MainPage from "./pages/mainPage/mainPage";
import CoursePage from "./pages/coursePage/coursePage";
import ThemePage from "./pages/themePage/themePage";
import ProfilePage from "./pages/profilePage/profilePage";
import CourseDevelopmentPage from "./pages/courseDevelopmentPage/courseDevelopmentPage";
import ThemeDevelopmentPage from "./pages/themeDevelopmentPage/themeDevelopmentPage";
import LectionDevelopmentPage from "./pages/lectionDevelopmentPage/lectionDevelopmentPage";
import LectionPage from "./pages/lectionPage/lectionPage";
import SettingsPage from "./pages/settingsPage/settingsPage";
import FinalTestDevPage from "./pages/finalTestDevPage/finalTestDevPage";

import ProtectedRoute from "./components/protectedRoute/protectedRoute";

import { Routes, Route } from "react-router-dom";
import { setUser } from "./redux/userSlice";

import "./App.scss"

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";


function App() {
  const [blockScroll, setBlockScroll] = useState(false)       //для блокировки скролла из-за бургерМеню
  const [ready, setReady] = useState(false)                   //для отображения всего сайта только после получения пользователя
  const dispatch = useDispatch()

  // колбек для бургер меню (блокировка скрола)
  let burgerCallback = useCallback((block) =>{
    setBlockScroll(block)
  }, [])

  // получение пользователя, если его токен активен
  useEffect(() => {
    const checkUser = async () => {
      // если токен существует
      const token = localStorage.getItem('access_token')
      if (token){
        try {
          // проверяем активен ли токен
          
          const response = await axios.post(process.env.REACT_APP_SERVER_URL + 'userCheck', { access_token: token });
          const data = response.data

          // если токен активен, то заносим информацию в редакс
          if (data.active){
            const user = {
              user_nickName: data.userData[0].user_nickName,
              user_imgUrl: data.userData[0].user_imgUrl,
              user_role: data.userData[0].user_role,
              user_id: data.userData[0].user_id,
              user_email: data.userData[0].user_email
            }
            
            dispatch(setUser(user))
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
      setReady(true)
    }

    checkUser()
  }, [])

  return (
    <div className={`App ${blockScroll? 'blockScroll' : ''}`}>
      {ready && <>
              <Header burgerCallback={burgerCallback} />

              <Routes>
                {/* ОБЫЧНЫЕ РОУТЫ */}
                <Route path="/" Component={MainPage} />
                <Route path="/course/:course_id" Component={CoursePage}/>
        
                {/* Защищённые роуты только по логину */}
                <Route element={<ProtectedRoute isRoleNeeded = {false} />}><Route path="/course/:course_id/chapter/:chapter_id" Component={ThemePage} /></Route>
                <Route element={<ProtectedRoute isRoleNeeded = {false} />}><Route path="/profile/settings" Component={SettingsPage} /></Route>
                <Route element={<ProtectedRoute isRoleNeeded = {false} />}><Route path="/profile" Component={ProfilePage} /></Route>
                <Route element={<ProtectedRoute isRoleNeeded = {false} />}><Route path="/course/:course_id/chapter/:chapter_id/theme/:theme_id/lection/:lection_id" Component={LectionPage} /></Route>
        
                {/* Защищённые роуты, только по логину и роли преподавателя */}
                <Route element = {<ProtectedRoute isRoleNeeded = {true} />}><Route path="/courseDevelopment" Component={CourseDevelopmentPage} /></Route>
                <Route element = {<ProtectedRoute isRoleNeeded = {true} />}><Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id" Component={ThemeDevelopmentPage} /></Route>
                <Route element = {<ProtectedRoute isRoleNeeded = {true} />}><Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id/lectionDevelopment/:theme_id" Component={LectionDevelopmentPage} /></Route>
                <Route element = {<ProtectedRoute isRoleNeeded = {true} />}><Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id/lectionDevelopment/:theme_id/:lection_id"  Component={LectionDevelopmentPage} /></Route>
                <Route element = {<ProtectedRoute isRoleNeeded = {true} />}><Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id/themeTestDevelopment/:theme_id" Component={FinalTestDevPage} /></Route>
                <Route element = {<ProtectedRoute isRoleNeeded = {true} />}><Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id/lectionDevelopment/:theme_id/chapterTestDevelopment" Component={FinalTestDevPage} /></Route>
              </Routes>
        
              <Footer />
            </>
          }


    </div>
  );
}

export default App;
