import axios from "axios";

// получение всех курсов
export async function getAllCourses() {
  return await axios.get('http://localhost:1000/courses').then(({data}) => data);
}

// получение одного курса
export async function getOneCourse(data){
  return await axios.get('http://localhost:1000/course/' + data.course_id).then(({data}) => data);
}

// получение всех курсов преподавателя
export async function getAllCoursesByTeacherId(teacher_id){
  return await axios.get('http://localhost:1000/courses/' + teacher_id).then(({data}) => data);
}

// создание курса
export async function postCourse(data){
  return axios.post('http://localhost:1000/course', {course_name: data.course_name, teacher_id: data.teacher_id})
}

// обновление курса
export async function updateCourse(){

}

// удаление курса
export async function deleteCourse(data){
  return axios.delete('http://localhost:1000/course/' + data.course_id)
}