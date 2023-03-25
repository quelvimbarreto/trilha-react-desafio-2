import React from "react";
import Button from "../Button";
import { ItemContainer, ButtonContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <ButtonContainer>
        <Button
          onClick={() => window.open(repo.html_url)}
          title="Ver repositório"
        />
        <Button onClick={handleRemove} title="Remover" tipo="delete" />
      </ButtonContainer>
    </ItemContainer>
  );
}

export default ItemRepo;
