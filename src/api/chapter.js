import axios from "axios";

// получение всхе разделов по айди курса
export async function getChaptersByCourseId(data) {
    return await axios.get('http://localhost:1000/chapters/' + data.course_id).then(({data}) => data);
}

// создание раздела
export async function postChapter(data){
    // console.log(data)
    return await axios.post('http://localhost:1000/chapter', {course_id: data.course_id, chapter_name: data.chapter_name}).then(({data}) => data);
}

// обновление раздела
export async function updateChapter(data){
    console.log(data)
    return await axios.put('http://localhost:1000/chapter', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => data);
}

// удаление раздела
export async function deleteChapter(data){
    // console.log(data)
    return await axios.delete('http://localhost:1000/chapter/' + data.chapter_id).then(({data}) => data)
}

// получение одного раздела
export async function getOneChapter(data){
    return await axios.get('http://localhost:1000/chapter/' + data.chapter_id).then(({data}) => data)
}