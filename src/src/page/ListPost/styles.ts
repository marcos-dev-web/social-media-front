import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-color: #f2f3f5;

  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

export const PostList = styled.div`
  width: 95%;
  height: 100%;
  max-width: 500px;
  padding: 1rem 0;

  border: 1px solid lightgray;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;

export const Post = styled.div`
  width: 90%;
  border: 1px solid lightgray;
  padding: 1rem;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  color: #444;
  font-weight: 600;
`;

export const Content = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #555;
`;

export const Line = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  background-color: lightgray;
  height: 1px;
`;

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

export const Comment = styled.p`
  font-size: 0.9rem;
  color: #666;

  &:not(:last-child) {
    padding-bottom: 0.5rem;
  }
`;

export const CommentsTitle = styled.h4`
  font-size: 1rem;
  color: #333333;
  margin-top: 0.5rem;
`;

export const CommentContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const InputComment = styled.input`
  padding: 5px;
  border-radius: 0;
  font-size: 1rem;
  border: 0;
  width: 100%;
  outline-color: dodgerblue;
`;

export const ButtonBack = styled.a`
  position: fixed;
  top: 10px;
  left: 10px;
  color: dodgerblue;
  text-decoration: none;
  cursor: pointer;
`;

export const Like = styled.button`
  display: block;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: auto;
  margin-top: 1rem;
  padding: 0.2rem 1rem;

  border: 1px solid lightsalmon;
  background: lightsalmon;
`;
