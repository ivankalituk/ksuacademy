import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

// получение всхе разделов по айди курса
export async function updateUserNickname(data) {
    return await axios.put(serverUrl + 'userNickname', {user_id: data.user_id, user_nickname: data.user_nickname}).then(({data}) => data);
}

export async function updateUserImg(data){
    console.log(data)
    return await axios.put(serverUrl + 'userImg', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => data);
}

export async function getUserCheckInfo(data){
    console.log(typeof(data.access_token))
    return axios.post(serverUrl + 'userCheck', data).then(({data}) => data);
}