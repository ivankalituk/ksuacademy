import axios from "axios";

async function getCourse() {
    return res = await axios.get('http://localhost:1000/courses').then(({data}) => data);
  }

export {getCourse}