import "./testPage.scss"

import sampleImg from '../../assets/photos/courseSampleAvatar.svg'
import { useState } from "react"
import { useRequest } from "../../hooks/hook"
import { updateCourse } from "../../api/course"

function  TestPage(){

    const [editMode, setEditMode] = useState(false)
    const [courseInput, setCourseInput] = useState('')
    const [newImg, setNewImg] = useState(null)

    // post request WITH FILE
    const {mutatedFunc: putCourse} = useRequest({fetchFunc: updateCourse})


    // submit data func
    const handleSubmit = () =>{
        if (courseInput !== ''){

            const data = new FormData();
            data.append('file', newImg)
            data.append('gay', courseInput)
            data.append('gay2', 2 )
            putCourse(data)
            // putCourse({
            //     course_id: 1,
            //     course_name: courseInput,
            //     img: newImg
            // })

            console.log(courseInput)
            setCourseInput('')
            setEditMode(false)
        } else {
            alert("EMPTY INPUT")
        }
    }

    // geting a photo
    const handleImg = (event) =>{
        const file = event.target.files[0]
        const  reader = new FileReader()

        reader.onload = () =>{
            setNewImg(reader.result)
        }

        reader.readAsDataURL(file)
    }


    return(
        <div className="testPage">
            <div className="testPage_container">
            
                <div className="testPage_heading">COURSES</div>

                <div className="testPage_course">
                    <div className="testPage_course_img">
                        <img src={newImg} alt="sampleImg" />
                        {editMode && <input type="file" onChange={handleImg}/>}
                    </div>
                    
                    {!editMode && <div className="testPage_course_name">NAME</div>}
                    {editMode && <input type="text" value={courseInput} onChange={(event)=>{setCourseInput(event.target.value)}}/>}
                </div>

                <div className="testPage_buttons">
                    <button onClick={() => {setEditMode(!editMode)}}>EDITMODE</button>
                    <button onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>        
        </div>
    )
}

export default TestPage