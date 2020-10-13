import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import { Wrapper, Aside, Footer, Header } from "./style";
import mapMarketImg from "../../assets/img/map-market.svg";
import "leaflet/dist/leaflet.css";

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

      <Map
        center={[-1.4496701, -48.4839197]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Wrapper>
  );
}
