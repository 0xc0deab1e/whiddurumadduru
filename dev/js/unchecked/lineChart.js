$(document).ready(function () {
  const urlParams = new URL(location.href).searchParams;

  const name = urlParams.get("target");

  var pddata = [];

  $.each(presidentDetailCandidateData, function (i, d) {
    if (d.president == name) {
      pddata[d.week_cum] = d.approve;
    }
  });
  var dsData = [];

  $.each(pddata, function (i, d) {
    if (d) {
      dsData[i] = d;
    } else {
      dsData[i] = null;
    }
  });
  console.log();
  setLineChart(dsData, name);
  if (dsData.length == 0) {
    $(".line-chart-container").css("display", "none");
  }
});

function setLineChart(data, name) {
  Highcharts.chart("line-chart", {
    chart: {
      backgroundColor: "transparent",
    },
    title: {
      text: "",
      align: "left",
    },

    yAxis: {
      lineColor: "#000000",
      gridLineWidth: 0,
      tickColor: "#FFFFFF",
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#FFFFFF",
          fontSize: 10,
        },
        formatter: function () {
          return this.value + "%";
        },
      },
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      crosshair: {
        enabled: true,
        dashStyle: "shortdot",
        width: 1,
      },
      gridLineWidth: 0,
      lineColor: "#000000",
      accessibility: {
        rangeDescription: "",
      },
      tickColor: "#FFFFFF",
      labels: {
        style: {
          color: "#FFFFFF",
          fontSize: 10,
        },
        formatter: function () {
          return this.value + " week";
        },
      },
    },
    tooltip: {
      formatter: function () {
        return (
          "<span style='font-size:10px;'><b>" +
          this.x +
          "주차</b></span> <br> <span>지지율</span> <b style='color:#ff4f12;'>" +
          this.y +
          "%</b>"
        );
      },
    },

    legend: {
      enabled: false,
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        connectNulls: true,
        marker: {
          radius: 0,
        },
        lineWidth: 1,
        states: {
          hover: {
            marker: {
              radius: 40,
            },
          },
        },
      },
    },

    series: [
      {
        color: "#ff4f12",
        name: "여론조사 지지율",
        data: data,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
}
