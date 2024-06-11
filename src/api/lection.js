import axios from "axios";
const serverUrl = process.env.REACT_APP_SERVER_URL

//создание лекции
export async function createLection(data){
    return await axios.post(serverUrl + 'lection', {theme_id: data.theme_id, lection_name:  data.lection_name, lection_content: data.lection_content}).then(({data})=> data)
}

// получение  всех лекций
export async function getLections(data){
    return await axios.get(serverUrl + 'lections/' + data.theme_id).then(({data})=> data)
}

// получение одной лекции
export async function getOneLection(data){
    // console.log(data)
    return await axios.get(serverUrl + 'lection/' + data.lection_id).then(({data})=> data)
}

// обновление лекции
export async function putLection(data){
    console.log(data)
    return await axios.put(serverUrl + 'lection', {lection_name: data.lection_name, lection_content: data.lection_content, lection_id: data.lection_id}).then(({data})=> data)
}

// удаление лекции
export async function deleteLection(data){
    console.log(data.lection_id)
    return await axios.delete(serverUrl + 'lection/' + data.lection_id).then(({data})=> data)
}
