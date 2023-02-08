import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import Subject from '../../components/subjectMain/subjectMain.jsx'

import mainInfoImg from '../../photos/mainInfoImg.png'
import cat1 from '../../photos/cat1.png'
import cat2 from '../../photos/cat2.png'

import './mainPage.scss'

// import CoursesPage from './pages/coursesPage/coursesPage';
// import ChaptrerPage from './pages/chapterPage/chapterPage.jsx';

function MainPage(){

    return(
        <div className="mainPage">
            <div className="content">
                <div className="content_container">

                    {/* главная инфа */}
                    <div className="mainInfo">
                        <div className="mainInfoImg">
                            <img src={mainInfoImg} alt="univer" />
                        </div>

                        <div className="infoText">
                            <span className="infoText_header">Реальні результати для когжного учня</span>

                            <p className="infoText_info">
                                Академія представляє широкі можливості для комунікації та 
                                взаємодії учасників навчального процесу. система створює 
                                і зберігає портфоліо кожного учня: всі здані ним роботи, 
                                всі повідомлення у форумі, всі оцінки і коментарі викладача 
                                до робіт.
                            </p>

                            <div className="infoText_btns">
                                <a>Студент</a>
                                <a>Вчитель</a>
                            </div>
                        </div>
                    </div>

                    {/* курсы */}
                    <div className="cources">
                        <div className="cources_header">курси</div>

                        <div className="cources_colomns">
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                            <Subject></Subject>
                        </div>
                    </div>

                    {/* два блока второстепенной инфы */}
                    <div className="secondaryInfo">
                        <div className="firstInfo">
                            <div className="cat_img">
                                <img src={cat1} alt="cat1" />
                            </div>

                            <div className="info_container">
                                <span className="info_header">Залучаємо до навчання кожного студента</span>

                                <p className="info_text">
                                    Одна із сильних сторін системи – широкі можливості для 
                                комунікації та взаємодії учасників навчального процесу. Сервіс розсилки дозволяє 
                                оперативно інформувати всіх учасників курсу або окремі групи про поточні події.
                                </p>
                            </div>
                        </div>

                        <div className="secInfo">

                            <div className="info_container">
                                <span className="info_header">Навчайся дистанційно</span>

                                <p className="info_text">
                                Система дистанційного навчання «KSU Online» призначена для організації дистанційної
                                освіти та обміну інформацією як між викладачем і студентом, так і між самими 
                                студентами.
                                </p>

                                
                            </div>

                            <div className="cat_img">
                                <img src={cat2} alt="cat1" />
                            </div>
                        </div>
                    </div>

                    {/* Партнёры */}
                    <div className="partners">
                        <div className="partners_header">партнери</div>
                        <div className="partners_list">

                        </div>
                    </div>

                </div>
            </div>
        </div>

        
    )
}

export default MainPage;