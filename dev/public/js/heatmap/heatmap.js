window.isPositive = true;
window.index = -1;

Highcharts.Templating.helpers.substr = (s, from, length) =>
  s.substr(from, length);

Highcharts.chart("container", {
  exporting: {
    enabled: false, // 햄버거 바 비활성화
  },
  chart: {
    type: "heatmap",
    plotBorderWidth: 1,
    backgroundColor: "#d6d6d6",
    height: 400,
  },
  title: {
    text: "",
  },
  xAxis: {
    labels: {
      enabled: false,
    },
    categories: [],
  },
  yAxis: {
    categories: [],
    labels: {
      enabled: false,
    },
    title: null,
    reversed: true,
  },
  accessibility: {
    point: {
      descriptionFormat:
        "{(add index 1)}. " +
        "{series.xAxis.categories.(x)} sales " +
        "{series.yAxis.categories.(y)}, {value}.",
    },
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, "#FFFFFF"],
      [0.5, "#87CEEB"],
      [1, "#0000FF"],
    ],
  },
  legend: {
    enabled: false,
    align: "right",
    layout: "vertical",
    margin: 0,
    verticalAlign: "top",
    y: 25,
    symbolHeight: 280,
  },
  tooltip: {
    useHTML: true,
    borderWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    shadow: false,
    formatter: function () {
      const value = this.point.value;

      return `<div style="text-align: center;">
                        <img src="${value}" style="width: 150px; height: 150px; z-index: 999; position: relative;" alt="Image"/><br>
                    </div>`;
    },
    positioner: function (labelWidth, labelHeight, point) {
      const maxWidth = this.chart.plotLeft + this.chart.plotWidth - labelWidth;
      const maxHeight = this.chart.plotTop + this.chart.plotHeight - labelHeight;
      let w = Math.max(point.plotX + this.chart.plotLeft, 10);
      if (w > maxWidth)
        w -= labelWidth;
      return {
          x: w,
          y: Math.min(Math.max(point.plotY + this.chart.plotTop - labelHeight + 25, 10), maxHeight),
      };
    }
  },
  series: [
    {
      name: "Sales per employee",
      borderWidth: 1,
      point: {
        events: {
          mouseOver: function () {
            d3.selectAll(".positive_chart_bar").remove();
            d3.selectAll(".negative_chart_bar").remove();
            drawStackedBarChart(
              this.options.positive,
              160,
              10,
              "#positive_chart"
            );
            drawStackedBarChart(
              this.options.negative,
              160,
              10,
              "#negative_chart"
            );
            document.querySelector(
              "#positive_status"
            ).innerHTML = `<span style="color: #e73921;">${this.options.positive[0]}</span> <span style="color: #5e83ba;">${this.options.positive[1]}</span> <span style="color: white;">${this.options.positive[2]}</span>`;
            document.querySelector(
              "#negative_status"
            ).innerHTML = `<span style="color: #e73921;">${this.options.negative[0]}</span> <span style="color: #5e83ba;">${this.options.negative[1]}</span> <span style="color: white;">${this.options.negative[2]}</span>`;
          },
          mouseOut: function () {},
          click: function () {
            const thumbnailsWidth =
              thumbnailData.sort((a, b) => b.x - a.x)[0].x + 1;
            window.location.href = `/details#${
              this.options.x + this.options.y * thumbnailsWidth
            }`;
          },
        },
      },
      data: thumbnailData,
      dataLabels: {
        enabled: true,
        color: "#000000",
      },
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
});

function toggleDiv3() {
  const div3 = document.querySelector(".toast");
  div3.classList.toggle("show");
  div3.style.transition = "bottom 0.5s ease-in-out";
}