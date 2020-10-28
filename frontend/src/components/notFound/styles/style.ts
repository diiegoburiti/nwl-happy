import styled from 'styled-components';
import {Link }  from 'react-router-dom';
import ladingBgImage from "../../../assets/img/404-error-robot-bro-1.svg";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg,#2986d1 8%,#88c7c7 100%);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${ladingBgImage}) no-repeat center center ;
  position: absolute;
  top: 10%;
  left: 0px;
`;

export const Title = styled.h2`
  font-size: 4.2rem;
  font-weight: 900;
  line-height: 76px;
  text-align: center;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
`;