import './App.css';

import MainPage from './pages/mainPage/mainPage';
import CoursesPage from './pages/coursesPage/coursesPage';
import ChaptrerPage from './pages/chapterPage/chapterPage';
import TestPage from './pages/testPage/testPage';
import LectionPAge from './pages/lectionPage/lectionPage';
import RegistrationPage from './pages/registrationPage/registrationPage';
import ProfilePage from './pages/profilePage/profilePage'

import Header from './components/header/header';
import Footer from './components/footer/footer';

import { Routes, Route, Form } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>

        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/courses' element={<CoursesPage/>}/>
          <Route path='/chapter' element={<ChaptrerPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/lection' element={<LectionPAge/>}/>
        </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
