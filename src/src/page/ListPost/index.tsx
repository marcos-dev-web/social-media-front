import React from "react";

import { usePosts } from "../../contexts/Posts";

import Comment from "../../components/Comment";
import Controls from "../../components/Controls";

import {
  Container,
  Content,
  Line,
  Post,
  PostList,
  Title,
  ButtonBack,
} from "./styles";

const ListPost: React.FC = () => {
  const { postList } = usePosts();

  return (
    <Container>
      <PostList>
        <ButtonBack href="/">Voltar</ButtonBack>
        {postList.map((post) => (
          <Post key={post.id}>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
            <Line />
            <Comment comments={post.comments} postId={post.id} />
            <Controls likes={post.likes} postId={post.id} />
          </Post>
        ))}
      </PostList>
    </Container>
  );
};

export default ListPost;
