import axios from "axios";

// получение всхе разделов по айди курса
export async function updateUserNickname(data) {
    return await axios.put('http://localhost:1000/userNickname', {user_id: data.user_id, user_nickname: data.user_nickname}).then(({data}) => data);
}

export async function updateUserImg(data){
    console.log(data)
    return await axios.put('http://localhost:1000/userImg', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => data);
}

export async function getUserCheckInfo(data){
    console.log(typeof(data.access_token))
    return axios.post('http://localhost:1000/userCheck', data).then(({data}) => data);
}