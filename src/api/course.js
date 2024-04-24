import axios from "axios";

export async function getAllCourses() {
  return await axios.get('http://localhost:1000/courses').then(({data}) => data);
}

export async function getOneCourse(course_id){
  return await axios.get('http://localhost:1000/course/' + course_id).then(({data}) => data);
}