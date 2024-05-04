import axios from "axios";

// получение тем по айди чаптера
export async function getThemesByChapterId(data) {
  return await axios.get('http://localhost:1000/themes/' + data.chapter_id).then(({data}) => data);
}

// удаление темы
export async function deleteTheme(data){
  return await axios.delete('http://localhost:1000/theme/' + data.theme_id).then(({data}) => data);
}

// изменение темы
export async function updateTheme(data){
  console.log(data)
  return await axios.put('http://localhost:1000/theme', {theme_id: data.theme_id, theme_name: data.theme_name}).then(({data}) => data);
}

// создание темы
export async function createTheme(data){
  console.log(data)
  return await axios.post('http://localhost:1000/theme', {chapter_id: data.chapter_id, theme_name: data.theme_name}).then(({data}) => data);
}