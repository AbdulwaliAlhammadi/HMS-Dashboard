import ReactApexChart from "react-apexcharts";

const PatCntByEntryData = [{
  name: "حالات الدخول",
  data: [2153, 3112, 1532, 3644],
  xlabels: [ "الطوارئ العامه", "طوارئ النساء والولادة", "طوارئ الاطفال", "العيادات الخارجية"]
}];

const PatCntByExitData = [{
    name: "حالات الخروج",
    data: [6153, 311, 1852, 2451, 1453],
    xlabels: [ "تحسن", "وفاة", "هروب", "حسب رغبة المريض", "على مسؤولية الأهل"]
  }];


const entryTypesData = PatCntByEntryData.map(({ name, data }) => ({ name, data }));
const entryTypesLabel = PatCntByEntryData.map(({ xlabels }) => xlabels)[0];

const exitTypesData = PatCntByExitData.map(({ name, data }) => ({ name, data }));
const exitTypesLabel = PatCntByExitData.map(({ xlabels }) => xlabels)[0];


export const PatChartByEntry = (props) => {
  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "string",
      categories: entryTypesLabel,
    },
    legend: {
      show: false,
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      opposite: false,
    },
    colors:['#E91E63']
  };

  return (
    <div id="chartf">
      <ReactApexChart
        options={options}
        series={entryTypesData}
        type="bar"
        height={props.height}
      />
    </div>
  );
};


export const PatChartByExit = (props) => {
    const options = {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "string",
        categories: exitTypesLabel,
      },
      legend: {
        show: false,
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        opposite: false,
      },
      colors:[ '#9C27B0']
    };
  
    return (
      <div id="chartf">
        <ReactApexChart
          options={options}
          series={exitTypesData}
          type="bar"
          height={props.height}
        />
      </div>
    );
  };
  