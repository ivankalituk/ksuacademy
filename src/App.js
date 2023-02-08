import './App.css';

import MainPage from './pages/mainPage/mainPage';
import CoursesPage from './pages/coursesPage/coursesPage';
import ChaptrerPage from './pages/chapterPage/chapterPage';

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
        </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
