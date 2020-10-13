import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Wrapper, Aside, Footer, Header } from "./style";
import mapMarketImg from "../../assets/img/map-market.svg";

export default function OrphanagesMap() {
  return (
    <Wrapper>
      <Aside>
        <Header>
          <img src={mapMarketImg} alt="happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Belém</strong>
          <span>Pará</span>
        </Footer>
      </Aside>

      <Link to="">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Wrapper>
  );
}
