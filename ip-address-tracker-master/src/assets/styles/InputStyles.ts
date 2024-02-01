import styled from "styled-components";

export const ContainerInput = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  background: white;
  border-radius: 15px;
  width: 30rem;
  height: 50px;
  display: flex;
  justify-content: center;
  /* Media query para pantallas más pequeñas */
  @media (max-width: 520px) {
    width: 90vw;
  }
`;
export const BoxInput = styled.input`
  padding: 10px;
  background: transparent;
  flex: 1;
  outline: none;
  border-radius: 15px;
  border: none;
  font-size: 14px;
`;
export const Btn = styled.button`
border: none;
outline: none;
  cursor: pointer;
  flex: 0.1;
  background: var(--VeryDarkGray);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--DarkGray); /* Cambia el color del borde al pasar el mouse sobre el elemento */
  }
`;
