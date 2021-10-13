import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  ButtonBack,
  Container,
  Input,
  InputContainer,
  Label,
  Loader,
  MessageBox,
  TextArea,
  Title,
} from "./styles";

import { usePosts } from "../../contexts/Posts";

const AddPost: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const { post } = usePosts();

  async function action() {
    if (title.trim().length === 0) {
      if (titleRef.current) {
        titleRef.current.focus();
        titleRef.current.style.borderColor = "red";
        return;
      }
    }

    if (text.trim().length === 0) {
      if (textRef.current) {
        textRef.current.focus();
        textRef.current.style.borderColor = "red";
        return;
      }
    }

    setLoading(true);

    await post(title, text);

    setTitle("");
    setText("");

    setLoading(false);
  }

  return (
    <Container>
      <ButtonBack href="/">Voltar</ButtonBack>

      <MessageBox>
        {loading && (
          <Loader>
            <p>Postando</p>
          </Loader>
        )}
        <Title>Nova postagem</Title>
        <Box>
          <InputContainer>
            <Label htmlFor="title">Título</Label>
            <Input
              placeholder="Título"
              id="title"
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(e) => {
                e.currentTarget.removeAttribute("style");
              }}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="content">Conteúdo</Label>
            <TextArea
              placeholder="Conteúdo"
              id="content"
              ref={textRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={(e) => {
                e.currentTarget.removeAttribute("style");
              }}
            />
          </InputContainer>
          <Button onClick={action}>Postar</Button>
        </Box>
      </MessageBox>
    </Container>
  );
};

export default AddPost;
