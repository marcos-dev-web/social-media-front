import React from "react";
import { Container, Option } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Option>
        <a href="/list">Lista de postagens</a>
      </Option>
      <Option>
        <a href="/new">Adicionar postagem</a>
      </Option>
    </Container>
  );
};

export default Home;
