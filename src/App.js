import './App.css';

import Header from './components/header/header';
import SubjectMainMenu from './components/subjectMainPage/subjectMainMenu';
import Footer from './components/footer/footer';
import SubjectCources from './components/subjectCourses/subjectCourses';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <SubjectCources></SubjectCources>
      {/* <SubjectMainMenu></SubjectMainMenu>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
