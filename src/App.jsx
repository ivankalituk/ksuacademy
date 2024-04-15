import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import MainPage from "./pages/mainPage/mainPage";
import CoursePage from "./pages/coursePage/coursePage";

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
        <div className="pageContent">
          {/* <MainPage></MainPage> */}
          <CoursePage></CoursePage>
        </div>
      <Footer></Footer>

    </div>
  );



}

export default App;
