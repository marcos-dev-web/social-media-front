import axios from "./api";

async function like(postId: number) {
  await axios.put("/post/like", {
    PostId: postId,
  });
}

export default like;
