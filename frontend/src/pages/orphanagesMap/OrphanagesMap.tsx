import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Wrapper, Aside, Footer, Header } from "./style";
import mapMarketImg from "../../assets/img/map-market.svg";
import mapIcon from "../../utils/mapIcon";

/* const mapIcon = Leaflet.icon({
  iconUrl: mapMarketImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
}); */

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
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-1.4496701, -48.4839197]}>
          <Popup minWidth={240} maxWidth={240} closeButton={false}>
            lorem ipsum
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color={"#fff"} />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Wrapper>
  );
}
