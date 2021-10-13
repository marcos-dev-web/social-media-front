import React, { useState } from "react";

import { usePosts } from "../../contexts/Posts";

import {
  Comment,
  CommentContainer,
  CommentsList,
  CommentsTitle,
  Container,
  Content,
  InputComment,
  Line,
  Post,
  PostList,
  Title,
  Loader,
  ButtonBack,
} from "./styles";

const ListPost: React.FC = () => {
  const { postList, comment } = usePosts();
  const [loading, setLoading] = useState(false);

  async function doComment(postId: number, content: string) {
    setLoading(true);
    await comment(content, postId);
    setLoading(false);
  }

  return (
    <Container>
      <PostList>
        {loading && (
          <Loader>
            <p>Carregando</p>
          </Loader>
        )}
        <ButtonBack href="/">
          Voltar
        </ButtonBack>
        {postList.map((post) => (
          <Post key={post.id}>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
            <Line />
            <CommentsTitle>Comentários</CommentsTitle>
            <CommentsList>
              {post.comments.map((comment) => (
                <Comment key={comment.id}>{comment.text}</Comment>
              ))}
            </CommentsList>
            <CommentContainer>
              <InputComment
                placeholder="Adicione um comentário"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    doComment(post.id, e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </CommentContainer>
          </Post>
        ))}
      </PostList>
    </Container>
  );
};

export default ListPost;
