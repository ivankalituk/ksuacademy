import axios from "axios";
const serverUrl = process.env.REACT_APP_SERVER_URL

//создание лекции
export async function createLection(data){
    return await axios.post(serverUrl + 'lection', data).then(({data})=> data)
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
    return await axios.put(serverUrl + 'lection', data).then(({data})=> data)
}

// удаление лекции
export async function deleteLection(data){
    console.log(data.lection_id)
    return await axios.delete(serverUrl + 'lection/' + data.lection_id).then(({data})=> data)
}
