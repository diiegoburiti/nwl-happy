import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Aside, AsideFooter } from "./styles/style";
import mapMarkerImg from "../../assets/img/map-market.svg";

import { useHistory } from "react-router-dom";

export default function SideBar() {
  const { goBack } = useHistory();

  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />

      <AsideFooter>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </AsideFooter>
    </Aside>
  );
}
