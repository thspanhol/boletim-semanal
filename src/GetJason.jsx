function GetJson({ jsonData, setJsonData }) {
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedJson = JSON.parse(e.target.result);
          setJsonData(parsedJson);
        } catch (error) {
          console.error("Erro ao analisar o JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="selecione">
      <div className="home">
        <div>
          <h1>Boletim Semanal</h1>
          <h3>Gerador de gráficos</h3>
        </div>
        <img src="/grafico128.png" alt="logo" />
      </div>
      <label htmlFor="fileInput" className="button">
        Selecionar Arquivo
        <input
          type="file"
          accept=".json"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </label>
    </div>
  );
}

export default GetJson;
