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
    <div>
      {!jsonData && <input type="file" accept=".json" onChange={handleFileSelect} />}
    </div>
  );
}

export default GetJson;
