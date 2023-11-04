import ReactApexChart from "react-apexcharts";
import { bedChartData, bedChartLabels } from "../js/variablesState";

export const BedStackColChart = (props) => {

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
      categories: bedChartLabels.value,
    },
    legend: {
      show: false,
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={bedChartData.value}
        type="bar"
        height={props.height}
      />
    </div>
  );
};
// export class BedStackColChart extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       series: bedChartData.value,
//       options: {
//         chart: {
//           type: "bar",
//           // height: 350,
//           stacked: true,
//           toolbar: {
//             show: true,
//           },
//           zoom: {
//             enabled: true,
//           },
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             borderRadius: 0,
//             dataLabels: {
//               total: {
//                 enabled: true,
//                 style: {
//                   fontSize: "13px",
//                   fontWeight: 900,
//                 },
//               },
//             },
//           },
//         },
//         xaxis: {
//           type: "string",
//           categories: [],
//         },
//         legend: {
//           show: false,
//           position: "right",
//           offsetY: 40,
//         },
//         fill: {
//           opacity: 1,
//         },
//       },
//     };
//   }

//   render() {

//     return (
//       <div id="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="bar"
//           height={this.props.height}
//         />
//       </div>
//     );
//   }
// }
