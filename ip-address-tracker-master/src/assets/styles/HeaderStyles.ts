import styled from "styled-components";
import bgDesktop from "../images/pattern-bg-desktop.png";
import bgMobile from "../images/pattern-bg-mobile.png";
export const ContainerHeader = styled.header`
  height: 38vh;
  background-image: url("${bgDesktop}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
   @media (max-width: 520px) {
    background-image: url("${bgMobile}");
  }
`;
export const Title = styled.h1`
  color: white !important;
  font-weight: 500;
`;
export const ContainerInfo = styled.section`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  position: relative;
  top: 100px;
  z-index: 2;
  /* Media query para pantallas más pequeñas */
  @media (max-width: 520px) {
    max-width: 20rem;
    top: 20px;
  }
`;
export const StyledHr = styled.hr`
  border: 2px solid #ddd; /* Color del borde */
  margin: 20px 0; /* Margen superior e inferior */
`;
