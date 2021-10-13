import React from "react";
import { Container, Option } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Option href="/list">Lista de postagens</Option>
      <Option href="/new">Adicionar postagem</Option>
    </Container>
  );
};

export default Home;
