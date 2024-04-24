import axios from "axios";

export async function getThemesByChapterId(chapter_id) {
  return await axios.get('http://localhost:1000/themes/' + chapter_id).then(({data}) => data);
}
