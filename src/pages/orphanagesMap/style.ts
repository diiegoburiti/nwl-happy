import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  a {
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 100;
    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #17d6eb;
    }
  }

  .leaflet-container {
    z-index: 5;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #2986d1 8%, #88c7c7 100%);
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  h2 {
    font-size: size 2.2rem;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const Orphanage = styled.div`
  display: block;
`;
