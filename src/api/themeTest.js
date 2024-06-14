import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

export async function getThemeTest(data) {
    console.log(data)
    return await axios.get(serverUrl + 'theme/test/' + data.theme_id).then(({data}) => data);
}

export async function postThemeTest(data) {
    console.log(data)
    return await axios.post(serverUrl + 'theme/test', data).then(({data}) => data);
}

export async function deleteThemeTest(data) {
    // theme_id
    return await axios.get(serverUrl + 'theme/test/' + data).then(({data}) => data);
}

export async function getThemePractice(data) {
    console.log(data)
    return await axios.get(serverUrl + 'theme/practice/' + data.theme_id).then(({data}) => data);
}

export async function postThemePractice(data) {
    console.log(data)
    return await axios.post(serverUrl + 'theme/practice/', data).then(({data}) => data);
}