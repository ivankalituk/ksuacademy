import './App.css';

import MainPage from './pages/mainPage/mainPage';
import CoursesPage from './pages/coursesPage/coursesPage';
import ChaptrerPage from './pages/chapterPage/chapterPage.jsx';

import ChapterProgress from './components/chapterProgress/chapterProgress';
import Header from './components/header/header';
import ThemeMenu from './components/themeMenu/themeMenu';
import SubjectMainPage from './components/subjectMainPage/subjectMainPage';
import FinalTest from './components/finalTest/finalTest';

function App() {
  return (
    <div className="App">
      {/* <MainPage></MainPage> */}
      {/* <CoursesPage></CoursesPage> */}
      <ChaptrerPage></ChaptrerPage>

      {/* <ChapterProgress></ChapterProgress> */}
      {/* <ThemeMenu></ThemeMenu> */}
      {/* <Header></Header> */}
      {/* <FinalTest></FinalTest> */}
    </div>
  );
}

export default App;
