import React from "react";
import { ItemContainer, ItemText } from "./styles";
import trash from "../../img/trash.png";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <>
      <ItemContainer onClick={handleRemove}>
        <ItemText>
          <h3>{repo.name}</h3>

          <p>{repo.full_name}</p>
          <br />
          <a href={repo.html_url} rel="noreferrer" target="_blank">
            Repositorio
          </a>
          <div className="buttonSecondary">
            <a href="#" rel="noreferrer" className="remover">
              <img src={trash} width={13} height={13} />
            </a>
          </div>
        </ItemText>
      </ItemContainer>
    </>
  );
}

export default ItemRepo;
