import React from "react";
import { Link } from "react-router-dom";
import { Container, LinkHome, Title, Wrapper } from "./styles/style";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <Title>Pagina não encontrada!</Title>
        <LinkHome to="/">
          <FiArrowRight size={24} color="#FFF" />
          Voltar para pagina de início.
        </LinkHome>
      </Wrapper>
    </Container>
  );
}
