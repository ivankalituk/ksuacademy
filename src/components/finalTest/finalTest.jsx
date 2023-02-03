import './finalTest.scss'

import cat from '../../photos/testCat.svg'

function FinalTest(){
    return(
        <div className="finalTest">
            <div className="finalTest_container">
                <div className="test_info">
                    <span className='first_heading'>Заліковий тест</span>

                    <span className='second_heading'>Загальний тест по розділам</span>

                    <div className="lection_links">
                        <a href="#">Посилання на тему</a>
                        <a href="#">Посилання на тему</a>
                        <a href="#">Посилання на тему</a>
                        <a href="#">Посилання на тему</a>
                    </div>

                    <a href="#" className="test_btn">Почати тест</a>
                </div>

                <div className="cat_img">
                    <img src={cat} alt="catTeacher" />
                </div>
            </div>

        </div>


    )
}

export default FinalTest;