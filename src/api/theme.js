import axios from "axios";

// получение тем по айди чаптера
export async function getThemesByChapterId(data) {
  return await axios.get('http://localhost:1000/themes/' + data.chapter_id).then(({data}) => data);
}
