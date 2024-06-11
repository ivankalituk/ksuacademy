import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

// получение всхе разделов по айди курса
export async function getLectionTest(data) {
    console.log(data)
    return await axios.get(serverUrl + 'lection/test/' + data.lection_id).then(({data}) => data);
}

export async function postLectionTest(data) {
    console.log(data)
    return await axios.post(serverUrl + 'lection/test', data).then(({data}) => data);
}

export async function deleteLectionTest(data) {
    // lection_id
    return await axios.get(serverUrl + 'lection/test/' + data).then(({data}) => data);
}