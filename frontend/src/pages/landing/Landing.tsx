import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { Content, Wrapper, Main, Location } from "./style";
import logoImg from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Wrapper>
      <Content>
        <img src={logoImg} alt="logo" />

        <Main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Belém</strong>
          <span>Pará</span>
        </Location>

        <Link to="/map">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </Content>
    </Wrapper>
  );
}
