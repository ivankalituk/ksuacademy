import axios from "axios";

// получение всхе разделов по айди курса
export async function getLectionTest(data) {
    console.log(data)
    return await axios.get('http://localhost:1000/lection/test/' + data.lection_id).then(({data}) => data);
}

export async function postLectionTest(data) {
    console.log(data)
    return await axios.post('http://localhost:1000/lection/test', data).then(({data}) => data);
}

export async function deleteLectionTest(data) {
    // lection_id
    return await axios.get('http://localhost:1000/lection/test/' + data).then(({data}) => data);
}