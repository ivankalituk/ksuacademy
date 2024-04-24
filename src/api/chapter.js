import axios from "axios";

export async function getChaptersByCourseId(course_id) {
    return await axios.get('http://localhost:1000/chapters/' + course_id).then(({data}) => data);
}