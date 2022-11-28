import { Container } from "./styles/styles.js";
import { useState } from "react";
import gitLogo from "./img/github.svg";
import Input from "./components/Input/index.jsx";
import ItemRepo from "./components/itemRepo/index.js";
import Button from "./components/Button/index.jsx";
import { api } from "./services/api";

const App = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [respos, setRespos] = useState([]);

  
  //Função que vai buscar o repositório e colocar na tela

  const handleSearchRepo = async () => {
    // requerimento get e utilizamos o repos que utilizamos no endereço http para direcionar
    const { data } = await api.get(`repos/${currentRepo}`);

    // se a informação for igual ao id
    if (data.id) {
      // Validação para não repetir repositorios
      const isExist = respos.find((repo) => repo.id === data.id);

      if (!isExist) {
        // Concatena com o setRespo com as informações que já temos
        setRespos((prev) => [...prev, data]);
        //Depois de encontrado, ao procurar de novo ele irá limpar
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado ou já existente!");
  };

  const handleRemoveRepo = (id) => {
    const remover = respos.filter((repo) => repo.id !== );
    console.log(remover);

    setCurrentRepo(remover);
  };

  return (
    <>
      <Container>
        <div className="App">
          <img src={gitLogo} width={72} height={72} />
        </div>
        <Input
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
        />
        <Button onClick={handleSearchRepo} />
        {respos.map((repo) => (
          <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
        ))}
      </Container>
    </>
  );
};

export default App;
