import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import MainPage from "./pages/mainPage/mainPage";
import CoursePage from "./pages/coursePage/coursePage";
import ThemePage from "./pages/themePage/themePage";
import ProfilePage from "./pages/profilePage/profilePage";
import CourseDevelopmentPage from "./pages/courseDevelopmentPage/courseDevelopmentPage";
import ThemeDevelopmentPage from "./pages/themeDevelopmentPage/themeDevelopmentPage";

import { Routes, Route } from "react-router-dom";

import "./App.scss"

import React, { useCallback, useState } from "react";
import TestPage from "./pages/testPage/testPage";

function App() {
  let [blockScroll, setBlockScroll] = useState(false)

  // колбек для бургер меню (блокировка скрола)
  let burgerCallback = useCallback((block) =>{
    setBlockScroll(block)
  }, [])

  return (
    <div className={`App ${blockScroll? 'blockScroll' : ''}`}>
      <Header burgerCallback={burgerCallback}></Header>

      <Routes>
        <Route path="/" Component={TestPage} ></Route>
        <Route path="/course/:course_id" Component={CoursePage}></Route>
        <Route path="/course/:course_id/chapter/:chapter_id" Component={ThemePage} ></Route>
        <Route path="/profile" Component={ProfilePage}></Route>
        <Route path="/courseDevelopment" Component={CourseDevelopmentPage}></Route>
        <Route path="/courseDevelopment/:course_id/themeDevelopment/:chapter_id" Component={ThemeDevelopmentPage}></Route>
      </Routes>

      <Footer />

    </div>
  );



}

export default App;
