import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: none;
  border-radius: 20px;
  height: 62px;
  width: 80%;
  margin: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #22272e;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fafafa40;
    cursor: pointer;
    color: #fafafa;
  }

  ${({ tipo }) =>
    tipo === "delete" &&
    css`
      background-color: #e4105d;
      color: white;

      :hover {
        background-color: #fafafa;
        color: #e4105d;
      }
    `}
`;
