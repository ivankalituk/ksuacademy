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

import { Routes, Route } from "react-router-dom";
import { setUser } from "./redux/userSlice";

import "./App.scss"

import React, { useCallback, useEffect, useState } from "react";
import TestPage from "./pages/testPage/testPage";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const [blockScroll, setBlockScroll] = useState(false)       //для блокировки скролла из-за бургерМеню
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
      console.log(token)
      if (token){
        try {
          // проверяем активен ли токен
          const response = await axios.post('http://localhost:1000/userCheck', { access_token: token });
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
    }

    checkUser()
  }, [])

  return (
    <div className={`App ${blockScroll? 'blockScroll' : ''}`}>
      <Header burgerCallback={burgerCallback}></Header>

      <Routes>
        <Route path="/" Component={MainPage} ></Route>
        <Route path="/course/:course_id" Component={CoursePage}></Route>
        <Route path="/course/:course_id/chapter/:chapter_id" Component={ThemePage} ></Route>
        <Route path="/course/:course_id/chapter/:chapter_id/theme/:theme_id/lection/:lection_id" Component={LectionPage}></Route>
        <Route path="/profile" Component={ProfilePage}></Route>
        <Route path="/courseDevelopment" Component={CourseDevelopmentPage}></Route>
        <Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id" Component={ThemeDevelopmentPage}></Route>
        <Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id/lectionDevelopment/:theme_id"  Component={LectionDevelopmentPage}></Route>
        <Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id/lectionDevelopment/:theme_id/:lection_id"  Component={LectionDevelopmentPage}></Route>
        <Route path="/profile/settings" Component={SettingsPage}/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
