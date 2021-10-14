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
  max-width: 700px;
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
    margin-top: 2rem;
  }

  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  color: #333;
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

export const ButtonBack = styled.a`
  position: fixed;
  top: 10px;
  left: 10px;
  color: dodgerblue;
  text-decoration: none;
  cursor: pointer;
`;
