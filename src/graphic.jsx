import { Chart } from "react-google-charts";

function Graphic({ grData, titulo }) {
  const data = [["Element", "Incidentes", { role: "style" }], ...grData];

  const sortedData = data.sort((a, b) => b[1] - a[1]);

  const options = {
    vAxis: {
      gridlines: { count: sortedData[1][1] },
      textStyle: {
        color: "black", // Cor do texto do eixo Y
        fontSize: 17.5, // Tamanho da fonte
      },
    },
    hAxis: {
      textStyle: {
        color: "black", // Cor do texto do eixo X
        fontSize: 15, // Tamanho da fonte
      },
    },
    legend: "none",
    position: "top",
    alignment: "center",
    textStyle: {
      fontSize: 14,
    },
  };

  return (
    <div className="grafico">
      <h2>{titulo}</h2>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={sortedData}
        options={options}
      />
    </div>
  );
}

export default Graphic;
