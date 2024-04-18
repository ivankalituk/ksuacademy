import './mainPage.scss'

import { Link } from 'react-router-dom';

import university from '../../assets/photos/university.png'
import cat1 from '../../assets/photos/mainCatSB1.png'
import cat2 from '../../assets/photos/mainCatSB2.png'

import CourseMainPage from './components/courseMainPage/courseMainPage';

function MainPage(){
    return(
        <div className="mainPage">
            <div className="mainPage_container">

                <div className="mainPage_mainBlock">
                    <img src={university} alt="univer" />

                    <div className="mainPage_mainBlock_info">
                        <div className="mainPage_mainBlock_heading">Реальні результати для кожного учня</div>

                        <div className="mainPage_mainBlock_text">
                            Академія представляє широкі можливості для комунікації та 
                            взаємодії учасників навчального процесу. система створює 
                            і зберігає портфоліо кожного учня: всі здані ним роботи, 
                            всі повідомлення у форумі, всі оцінки і коментарі викладача 
                            до робіт.
                        </div>

                        <div className="mainPage_mainBlock_buttons">
                            <Link to={"/profile"}>студент</Link>
                            <Link to={"/profile"}>вчитель</Link>
                        </div>
                    </div>
                </div>


                <div className="mainPage_courseBlock">
                    <div className="mainPage_courseBlock_heading">курси</div>

                    <div className="coursesColumns">
                        <CourseMainPage></CourseMainPage>
                        <CourseMainPage></CourseMainPage>
                        <CourseMainPage></CourseMainPage>
                        <CourseMainPage></CourseMainPage>
                        <CourseMainPage></CourseMainPage>
                        <CourseMainPage></CourseMainPage>
                    </div>
                </div>

                
                <div className="mainPage_secondaryBlock">
                    <div className="secondaryBlock_block">
                        <img src={cat1} alt="cat" />

                        <div className="secondaryBlock_text">
                            <div className="secondaryBlock_text_heading">Залучаємо до навчання кожного студента</div>

                            <div className="secondaryBlock_text_info">
                                Одна із сильних сторін системи – широкі можливості для комунікації та взаємодії 
                                учасників навчального процесу. Сервіс розсилки дозволяє оперативно інформувати 
                                всіх учасників курсу або окремі групи про поточні події.
                            </div>
                        </div>
                    </div>

                    <div className="secondaryBlock_block">
                        <img src={cat2} alt="cat" />

                        <div className="secondaryBlock_text">
                            <div className="secondaryBlock_text_heading">Навчайся дистанційно</div>

                            <div className="secondaryBlock_text_info">
                                Система дистанційного навчання «KSU Online» призначена для організації дистанційної 
                                освіти та обміну інформацією як між викладачем і студентом, так і між самими студентами.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;