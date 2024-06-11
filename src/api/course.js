import axios from "axios";
const serverUrl = process.env.REACT_APP_SERVER_URL

// получение всех курсов
export async function getAllCourses() {
  return await axios.get(serverUrl + 'courses').then(({data}) => data);
}

// получение одного курса
export async function getOneCourse(data){
  // console.log(data)
  return await axios.get(serverUrl + 'course/' + data.course_id).then(({data}) => data);
}

// получение всех курсов преподавателя
export async function getAllCoursesByTeacherId(teacher_id){
  return await axios.get(serverUrl + 'courses/' + teacher_id).then(({data}) => data);
}

// создание курса
export async function postCourse(data){
  return await axios.post(serverUrl + 'course', {course_name: data.course_name, teacher_id: data.teacher_id})
}

// обновление курса
export async function updateCourse(data){
  console.log(1)
  return await axios.put(serverUrl + 'course', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => data);
}

// удаление курса
export async function deleteCourse(data){
  // console.log(data)
  return await axios.delete(serverUrl + 'course/' + data.course_id)
}