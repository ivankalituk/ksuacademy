import axios from "axios";

// получение всхе разделов по айди курса
export async function getChaptersByCourseId(data) {
    return await axios.get('http://localhost:1000/chapters/' + data.course_id).then(({data}) => data);
}

// создание раздела
export async function createChapter(data){
    return await axios.post('http://localhost:1000/chapter', {course_id: data.course_id, chapter_name: data.chapter_name})
}