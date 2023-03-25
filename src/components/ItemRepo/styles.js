import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-bottom: #fafafa60 1px solid;

  h3 {
    font-size: 32px;
    color: #fafafa;
    text-transform: capitalize;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
