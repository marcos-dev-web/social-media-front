import React from "react";

import { usePosts } from "../../contexts/Posts";

import { Container, Desc, Like } from "./styles";

interface IProps {
  postId: number;
  likes: number;
}

const Controls: React.FC<IProps> = ({ postId, likes }) => {
  const { like } = usePosts();

  async function doLike() {
    await like(postId);
  }

  return (
    <Container>
      {likes > 0 ? (
        <Desc>{likes} pessoas curtiram sua postagem</Desc>
      ) : (
        <Desc>Ninguém curtiu seu post ainda</Desc>
      )}
      <Like onClick={doLike}>Like</Like>
    </Container>
  );
};

export default Controls;
