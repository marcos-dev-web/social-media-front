import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #f2f3f5;
`;

export const Option = styled.a`
  width: 95%;
  height: 45px;
  max-width: 400px;
  margin: 1rem 0;

  border-radius: 0;
  border: 1px solid lightgray;

  overflow: hidden;

  cursor: pointer;

  background-color: #f8f8f8;

  display: inline-block;
  text-align: center;
  font-size: 1rem;
  padding-top: 0.6rem;
  font-size: 1rem;
  color: #666;
  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;

    transform: scale(1.05);
  }
`;
