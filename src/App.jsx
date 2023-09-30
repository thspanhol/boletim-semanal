import { useState } from "react";
import GetJson from "./GetJason";
import Graphic from "./graphic";
import "./App.css";

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
        return [`${quantidade} - ${produtoSistema}`, quantidade];
      }
    );

    return resultado;
  }

  return (
    <>
      {!jsonData && <GetJson jsonData={jsonData} setJsonData={setJsonData} />}
      {jsonData && (
        <h1 className="head">
          Gráficos de Incidentes - {jsonData[0]["Responsável pelo Ajuste"]}
        </h1>
      )}
      {jsonData && (
        <Graphic
          titulo="Produto/Sistema Afetado"
          grData={productCount(jsonData, "Produto/Sistema").map((e) => [
            ...e,
            "#4774cc",
          ])}
        />
      )}
      {jsonData && (
        <Graphic
          titulo="Status"
          grData={productCount(jsonData, "Status").map((e) => [
            ...e,
            "#f87c2b",
          ])}
        />
      )}
    </>
  );
}

export default App;
