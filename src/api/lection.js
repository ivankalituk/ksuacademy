import axios from "axios";

//создание лекции
export async function createLection(data){
    return await axios.post('http://localhost:1000/lection', {theme_id: data.theme_id, lection_name:  data.lection_name, lection_content: data.lection_content}).then(({data})=> data)
}

// получение  всех лекций
export async function getLections(data){
    return await axios.get('http://localhost:1000/lections/' + data.theme_id).then(({data})=> data)
}
