import styled from "styled-components";

import ladingBgImage from "../../assets/img/landing.svg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #2986d1 8%, #88c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 688px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${ladingBgImage}) no-repeat 80% center;
`;

export const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 4.2rem;
    font-weight: 900;
    line-height: 76px;
  }

  p {
    margin-top: 40px;
    font-size: 1.3rem;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.3rem;

  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const Enter = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2;

  &:hover {
    background: #96feff;
  }
`;
