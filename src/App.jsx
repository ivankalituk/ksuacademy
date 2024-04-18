import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import MainPage from "./pages/mainPage/mainPage";
import CoursePage from "./pages/coursePage/coursePage";
import ThemePage from "./pages/themePage/themePage";
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
        <Route path="/course/:subId" Component={CoursePage}></Route>
        <Route path="/course/:subId/theme/:theId" Component={ThemePage} ></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );



}

export default App;
