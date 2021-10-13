import axios from "./api";

async function post(title: string, content: string) {
  await axios.post("/post/new", {
      Title: title,
      Content: content,
  });
}

export default post;
