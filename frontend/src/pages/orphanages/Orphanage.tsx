import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import {
  CloseddOnWeekends,
  ContactButton,
  Hour,
  Images,
  MainContent,
  MapContainer,
  MapContainerFooter,
  OpenDetails,
  OpenOnWeekends,
  OrphanageDetails,
  OrphanageDetailsContent,
  Wrapper,
} from "./style";
import SideBar from "../../components/sideBar/SideBar";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import { useParams } from "react-router-dom";

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  image: Array<{
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  useEffect(() => {
    const getOrphanage = async () => {
      const response = await api.get(`/orphanages/${params.id}`)
      setOrphanage(response.data);
    }
    getOrphanage();
  }, [params.id]);

  if (!orphanage) return <p>Carregando...</p>;

  return (
    <Wrapper>
      <SideBar />

      <MainContent>
        <OrphanageDetails>
          <img
            src={orphanage.image[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.image.map((image, index) => {
              return (
                <button
                  key={orphanage.name}
                  className={activeImageIndex === index ? "active" : ""}
                  type="button"
                  onClick={() => setactiveImageIndex(index)}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              );
            })}
          </Images>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <MapContainerFooter>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </MapContainerFooter>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </Hour>

              {orphanage.open_on_weekends ? (
                <OpenOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <CloseddOnWeekends>
                  <FiInfo size={32} color="#FFF6690" />
                  Não atendemos <br />
                  fim de semana
                </CloseddOnWeekends>
              )}
            </OpenDetails>

            {/*  <ContactButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton> */}
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </MainContent>
    </Wrapper>
  );
}
