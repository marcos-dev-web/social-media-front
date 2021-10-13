import React from "react";

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
  ButtonBack,
  Like,
} from "./styles";

const ListPost: React.FC = () => {
  const { postList, comment, like } = usePosts();

  async function doComment(postId: number, content: string) {
    await comment(content, postId);
  }

  async function doLike(postId: number) {
    await like(postId);
  }

  return (
    <Container>
      <PostList>
        <ButtonBack href="/">Voltar</ButtonBack>
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
            <Like
              onClick={(e) => {
                doLike(post.id);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
              }}
            >
              Like ({post.likes})
            </Like>
          </Post>
        ))}
      </PostList>
    </Container>
  );
};

export default ListPost;
