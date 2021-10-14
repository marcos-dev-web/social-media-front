import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Desc = styled.p`
    max-width: 80%;
    font-size: 0.7rem;
    font-weight: bold;
    color: #444;
    margin-top: 0.5rem;
`;

export const Like = styled.button`
  display: block;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: auto;
  margin-top: 1rem;
  padding: 0.2rem 1rem;

  border: 0;
  background: dodgerblue;
  border-radius: 5px;
  color: white;

  &:hover {
      background-color: #1c83e7;
  }
`;
