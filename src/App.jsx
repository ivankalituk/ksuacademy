import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import MainPage from "./pages/mainPage/mainPage";
import CoursePage from "./pages/coursePage/coursePage";
import ThemePage from "./pages/themePage/themePage";
import ProfilePage from "./pages/profilePage/profilePage";
import SubjectDevelopmentPage from "./pages/courseDevelopmentPage/courseDevelopmentPage";
import ThemeDevelopmentPage from "./pages/themeDevelopmentPage/themeDevelopmentPage";

import { Routes, Route } from "react-router-dom";

import "./App.scss"

import { useState } from "react";

function App() {

  let [blockScroll, setBlockScroll] = useState(false)

  // колбек для бургер меню (блокировка скрола)
  let burgerCallback = (block) =>{
    setBlockScroll(block)
  }


  return (
    <div className={`App ${blockScroll? 'blockScroll' : ''}`}>
      <Header burgerCallback={burgerCallback}></Header>

      <Routes>
        <Route path="/" Component={MainPage} ></Route>
        <Route path="/course/:course_id" Component={CoursePage}></Route>
        <Route path="/course/:course_id/chapter/:chapter_id" Component={ThemePage} ></Route>
        <Route path="/profile" Component={ProfilePage}></Route>
        <Route path="/courseDevelopment" Component={SubjectDevelopmentPage}></Route>
        <Route path="/courseDevelopment/themeDevelopment" Component={ThemeDevelopmentPage}></Route>
      </Routes>

      <Footer />

    </div>
  );



}

export default App;
