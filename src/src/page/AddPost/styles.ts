import styled from "styled-components";

export const Container = styled.main`
  background-color: #f2f3f5;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageBox = styled.div`
  width: 95%;
  max-width: 500px;
  padding: 1rem;

  border: 1px solid lightgray;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 0 1rem;
  color: #555;
  font-size: 1.5rem;
`;

export const Box = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

export const InputContainer = styled.div`
  width: 95%;

  border: 1px solid lightgray;

  margin: 0 auto;
  margin-top: 1rem;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #666666;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  color: #333333;
  margin-top: 0.5rem;
  border: 1px solid lightgray;

  background-color: #f8f8f8;
  padding: 0.1rem 0.5rem;
  outline: 0;

  &:focus {
    border-color: dodgerblue;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  font-size: 1rem;
  color: #333333;
  margin-top: 0.5rem;
  border: 1px solid lightgray;

  background-color: #f8f8f8;
  padding: 0.1rem 0.5rem;
  outline: 0;

  min-height: 100px;
  max-height: 200px;

  resize: vertical;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
  }

  &:focus {
    border-color: dodgerblue;
  }
`;

export const Button = styled.button`
  width: 95%;
  height: 45px;
  font-size: 1rem;
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  border: 0;
  cursor: pointer;
  background-color: dodgerblue;
  color: white;
  font-weight: 600;

  &:hover {
    background-color: #357ec5;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f2f3f5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  & p {
    font-size: 1rem;
    color: #404452;
  }
`;

export const ButtonBack = styled.a`
  position: fixed;
  top: 10px;
  left: 10px;
  color: dodgerblue;
  text-decoration: none;
  cursor: pointer;
`;
