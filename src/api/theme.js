import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

// получение тем по айди чаптера
export async function getThemesByChapterId(data) {
  return await axios.get(serverUrl + 'themes/' + data.chapter_id).then(({data}) => data);
}

// удаление темы
export async function deleteTheme(data){
  return await axios.delete(serverUrl + 'theme/' + data.theme_id).then(({data}) => data);
}

// изменение темы
export async function updateTheme(data){
  console.log(data)
  return await axios.put(serverUrl + 'theme', {theme_id: data.theme_id, theme_name: data.theme_name}).then(({data}) => data);
}

// создание темы
export async function createTheme(data){
  console.log(data)
  return await axios.post(serverUrl + 'theme', {chapter_id: data.chapter_id, theme_name: data.theme_name}).then(({data}) => data);
}