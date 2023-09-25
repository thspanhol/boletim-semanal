import * as XLSX from 'xlsx';

function GetJson({ jsonData, setJsonData }) {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const jsonResult = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setJsonData(jsonResult);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="selecione">
      <div className="home">
        <div>
          <h1>Boletim Semanal</h1>
          <h3>Gerador de gráficos</h3>
        </div>
        <img src="https://raw.githubusercontent.com/thspanhol/boletim-semanal/main/src/assets/grafico128.png" alt="logo" />
      </div>
      <label htmlFor="fileInput" className="button">
        Selecionar Arquivo
        <input
          type="file"
          accept=".xls, .xlsx"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </label>
    </div>
  );
}

export default GetJson;
