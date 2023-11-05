import { Component } from "react";
import ReactApexChart from "react-apexcharts";
import RoomPieChartData from "../data/RoomPieChartData.json";
import { bedChartData, bedChartLabels} from "../js/variablesState";

const roomTypesLabels = RoomPieChartData.map((data) => data.RoomType);
const roomCountsData = RoomPieChartData.map((data) => data.RoomCnt);

function getRoomDetailsByIndex(index) {
  if (index >= 0 && index < RoomPieChartData.length) {
    return RoomPieChartData[index].RoomDetails;
  }
  return [];
}

export class RoomPieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: roomCountsData,
      options: {
        labels: roomTypesLabels,
        chart: {
          events: {
            dataPointSelection: (e, chart, opts) => {
              var selectedPoints = chart.w.globals.selectedDataPoints[0][0];
              if (selectedPoints !== undefined) {
                const data = getRoomDetailsByIndex(selectedPoints);
                bedChartData.value = data.map(({ name, data }) => ({ name, data }));
                bedChartLabels.value = data.map(({ xlabels }) => xlabels)[0];
              }
            },
          },
        },
        legend: {
          position: 'bottom'
        }
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={this.props.height}
        />
      </div>
    );
  }
}
