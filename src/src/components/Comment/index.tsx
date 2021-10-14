import React, { useState } from "react";

import { usePosts } from "../../contexts/Posts";
import { IComment } from "../../contexts/Posts/types";

import {
  CommentItem,
  CommentContainer,
  CommentsList,
  InputComment,
  CommentsTitle,
  ButtonComment,
} from "./styles";

interface IProps {
  comments: Array<IComment>;
  postId: number;
}

const Comment: React.FC<IProps> = ({ comments, postId }) => {
  const { comment } = usePosts();

  const [commentText, setCommentText] = useState("");

  async function doComment() {
    if (commentText.length > 0) {
      await comment(commentText, postId);
      setCommentText("");
    }
  }

  return (
    <>
      <CommentsTitle>Comentário</CommentsTitle>
      <CommentsList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>{comment.text}</CommentItem>
        ))}
      </CommentsList>
      <CommentContainer>
        <InputComment
          placeholder="Adicione um comentário"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              doComment();
            }
          }}
        />
        <ButtonComment onClick={() => doComment()}>Comentar</ButtonComment>
      </CommentContainer>
    </>
  );
};

export default Comment;
