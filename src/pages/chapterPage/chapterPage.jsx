import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import ThemeMenu from "../../components/themeMenu/themeMenu";
import ChapterProgress from "../../components/chapterProgress/chapterProgress";
import FinalTest from "../../components/finalTest/finalTest";

import './chapterPage.scss'

function ChaptrerPage(){
    return(
        <div className="chapterPage">
            <Header></Header>
            <ChapterProgress></ChapterProgress>

            <div className="content">
                <div className="content_container">
                    <ThemeMenu></ThemeMenu> 
                    <ThemeMenu></ThemeMenu>
                    <ThemeMenu></ThemeMenu>
                    
                    <FinalTest></FinalTest>
                </div>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default ChaptrerPage;