import axios from "axios";

// получение всех курсов
export async function getAllCourses() {
  return await axios.get('http://localhost:1000/courses').then(({data}) => data);
}

// получение одного курса
export async function getOneCourse(course_id){
  return await axios.get('http://localhost:1000/course/' + course_id).then(({data}) => data);
}

// получение всех курсов преподавателя
export async function getAllCoursesByTeacherId(teacher_id){
  return await axios.get('http://localhost:1000/courses/' + teacher_id).then(({data}) => data);
}

// создание курса
export async function postCourse(course_name, teacher_id){
  return axios.post('http://localhost:1000/course', {course_name: course_name, teacher_id: teacher_id})
}

// обновление курса
export async function updateCourse(){

}

// удаление курса
export async function deleteCourse(){

}