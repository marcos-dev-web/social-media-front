import axios from "./api";

async function comment(postId: number, content: string) {
  await axios.post("/post/new/comment", {
    Text: content,
    PostId: postId,
  });
}

export default comment;
