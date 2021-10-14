import styled from "styled-components";

export const CommentsList = styled.div`
  width: 90%;
  margin-top: 0.5rem;
  margin-left: 10%;
  max-height: 100px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const InputComment = styled.input`
  margin-right: 1rem;
  padding: 5px;
  border-radius: 0;
  font-size: 1rem;
  border: 1px solid lightgray;
  flex: 1;
  outline-color: dodgerblue;
  border-radius: 5px;
`;

export const ButtonComment = styled.button`
  border: 0;
  padding: 5px 8px;
  background-color: dodgerblue;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;

  border-radius: 5px;

  &:hover {
    background-color: #1c83e7;
  }
`;

export const CommentItem = styled.p`
  font-size: 0.9rem;
  color: #666;

  &:not(:last-child) {
    padding-bottom: 0.5rem;
  }
`;

export const CommentsTitle = styled.h4`
  font-size: 0.9rem;
  color: #444444;
  margin-top: 0.5rem;
`;
