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

export const Option = styled.div`
  width: 95%;
  height: 45px;
  max-width: 400px;
  margin: 1rem 0;

  border-radius: 8px;

  overflow: hidden;

  cursor: pointer;

  background-color: white;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);

  & > a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1rem;
    padding-top: 0.6rem;
    font-size: 1rem;
    color: dodgerblue;
    text-decoration: none;
  }

  &:hover {
    background-color: #f8f8f8;

    transform: scale(1.05);
  }
`;
