import { useState } from "react";
import GetJson from "./GetJason";
import Graphic from "./graphic";

function App() {
  const [jsonData, setJsonData] = useState(null);

  function productCount(dados, categoria) {
    // Cria um objeto para rastrear as ocorrências da categoria passada como parâmetro
    const ocorrencias = {};

    // Percorre os dados e conta as ocorrências
    dados.forEach((item) => {
      const produtoSistema = item[categoria];

      if (produtoSistema) {
        if (ocorrencias[produtoSistema]) {
          ocorrencias[produtoSistema]++;
        } else {
          ocorrencias[produtoSistema] = 1;
        }
      }
    });

    // Converte o objeto de ocorrências em um array de arrays
    const resultado = Object.entries(ocorrencias).map(
      ([produtoSistema, quantidade]) => {
        return [produtoSistema, quantidade];
      }
    );

    return resultado;
  }

  return (
    <>
      <GetJson jsonData={jsonData} setJsonData={setJsonData} />
      {jsonData && (
        <Graphic
          grData={productCount(jsonData, "Produto/Sistema").map((e) => [
            ...e,
            "darkblue",
          ])}
        />
      )}
      {jsonData && (
        <Graphic
          grData={productCount(jsonData, "Status").map((e) => [
            ...e,
            "darkred",
          ])}
        />
      )}
    </>
  );
}

export default App;
