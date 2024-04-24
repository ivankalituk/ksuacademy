import { Link } from 'react-router-dom'

import './header.scss'

import logo from '../../assets/photos/logo.svg'
import coursesTick from '../../assets/photos/coursesTick.svg'
import burgerMenu from '../../assets/photos/burger.svg'

import SearchBar from './components/searchBar/searchBar'
import Registration from './components/registration/registration'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useFetchRequest } from '../../hooks/hook'
import { getAllCourses } from '../../api/course'


function Header({burgerCallback}){

    let [courses, setCourses] = useState(true)      //для обработки окна курсов
    let [burger, setBurger] = useState(true)        //для обработки бургер меню

    let isMobile = useMediaQuery({maxWidth: 700});


    // для отслеживания размера экрана
    useEffect(()=>{
        console.log('mob: '+isMobile+' cou: ' + courses + ' bur: ' + burger)
        if(isMobile && !courses){
            setCourses(true)
        }

        if(!isMobile && !burger){
            setBurger(true)
            burgerCallback(burger)
        }
    }, [isMobile])

    // обработка нажатия на кнопку курсов
    let handleCourse = () => {
        setCourses(!courses)
    }

    // обработка нажатия на кнопку бургер меню
    let hadleBurger = () => {
        setBurger(!burger)
        burgerCallback(burger)
    }

    const {data: coursesList, isFeching: coursesIsFeching} = useFetchRequest({fetchFunc: getAllCourses, key: []})

    return(
        <header>
            <div className="header_container">
                
                <Link to="/" className="header_logoGroup">
                    <img src={logo} alt="Logo" />
                    
                    <div className="header_logoGroup_text">ksu academy</div>
                </Link>


                <div className="header_searchGroup">

                    <SearchBar />

                    <div className="header_searchGroup_courses" onClick={handleCourse}>
                        <div className="searchGroup_courses_text">курси</div>

                        <img src={coursesTick} alt="coursesTick" className={courses? "rotate" : ""}/>
                    </div>

                </div>


                <div className="header_registrationGroup">
                    <Registration />
                </div>

                <div className="header_burger">
                    <img src={burgerMenu} alt="burger" onClick={hadleBurger}/>
                </div>
            </div>

            <div className="header_courses">
                <div className={`header_courses_container ${courses? "show" : ""}`}>

                    {coursesIsFeching && coursesList.map((data, index) => (
                        <Link key={index}>{data.course_name}</Link>
                    ))}

                </div>
            </div>

            <div className="header_burgerMenu">
                <div className={`header_burgerMenu_burger ${burger? "show" : ""}`}>
                    <div className="header_burgerMenu_container">
                        <div className="header_burgerMenu_header">
                            <Registration />
                        </div>

                        <div className="header_burgerMenu_listHeading">Курси</div>

                        <div className="header_burgerMenu_subjectList">

                            {coursesIsFeching && coursesList.map((data, index) => (
                                <Link key={index}>{data.course_name}</Link>
                            ))}

                        </div>
                    </div>
                </div>

                <div className={`header_burgerMenu_background ${burger? "show" : ""}`} onClick={hadleBurger}></div>

            </div>
        </header>
    )
}

export default Header