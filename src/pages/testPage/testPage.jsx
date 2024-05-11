import "./testPage.scss"
import axios from "axios"
import { useState } from "react"

function  TestPage(){

    const [photoFile, setPhotoFile] = useState(null)
    const [selectedImg, setSelectedImg] = useState(null)


    const handlePhoto = (event) => {
        const file = event.target.files[0]
        setPhotoFile(file)
        const reader = new FileReader()

        reader.onload= () =>{
            setSelectedImg(reader.result)
        }

        reader.readAsDataURL(file)
    }

    const handleUpload = () =>{
        if (!photoFile) return; // Добавьте проверку на наличие файла

        const formData = new FormData();
        formData.append('chapter_id', 2)
        formData.append('file', photoFile);

        axios.put('http://localhost:1000/course', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            // Добавьте здесь логику обработки успешного ответа от сервера
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            // Добавьте здесь логику обработки ошибки
        });
    }

    return(
        // <div className="testPage">
        //     <input type="file" id="fileInput" onChange={handlePhoto}/>
        //     <button onClick={handleUpload}>SUBMIT</button>
        //     <img src={selectedImg} alt="" />
        // </div>
        
        <img src={'http://localhost:1000/uploads/sample.jpg'} alt="" />
    )
}

export default TestPage
