function isMobile() {
  return false;
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iOS detection
  if (/iPhone|iPad|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return true;
  }

  // Other mobile user agents
  if (/Mobile|mini|Fennec|Windows Phone|webOS|Opera Mobi|IEMobile|BlackBerry/.test(userAgent)) {
    return true;
  }

  return false;
}

let bgColor = window.index == -1 ? "#d6d6d6" : "#fff";
if (isMobile())
  bgColor = "#e3e3e3";

function drawChart(name, isPositive) {
  Highcharts.chart("bar_chart", {
    exporting: {
      enabled: false, // 햄버거 바 비활성화
    },
    credits: {
      enabled: false,
    },
    chart: {
      type: "line",
      backgroundColor: bgColor,
    },
    title: {
      text: "",
      align: "left",
    },
    subtitle: {
      text: "",
      align: "left",
    },
    xAxis: {
      labels: {
        style: {
          fontSize: isMobile() ? '10px' : '13px' // 원하는 크기로 설정하세요.
      },
        enabled: true, // X축 레이블 활성화
        
      },
    },
    yAxis: {
      labels: {
        style: {
          fontSize: isMobile() ? '10px' : '13px' // 원하는 크기로 설정하세요.
      },
      },
      title: {
        text: "",
      },
      min: 0,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: `재임 {point.x}주차: ${
        isPositive ? "긍정" : "부정"
      } {point.y:.2f} %`,
    },

    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: getSeries(name, isPositive),
  });
}

function getSeries(name, isPositive) {
  const result = pollData.map((x) => {
    return {
      name: x.name,
      data: x.data.map((y) => y.filter((x, i) => !i || i == !isPositive + 1)),
    };
  });
  if (name) {
    return result.filter((x) => x.name == name);
  }
  return result;
}

function togglePositive(isPositive) {
  drawChart(null, isPositive);
}

function drawStackedBarChart(values, width, height, appendTo) {
  var data = [{ values: values }];

  var stackedData = d3.stack().keys(d3.range(data[0].values.length))(
    data.map(function (d) {
      return d.values;
    })
  );

  var svg = d3
    .select(appendTo)
    .append("svg")
    .attr("class", `${appendTo.slice(1)}_bar`)
    .append("g");

  var x = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(stackedData[stackedData.length - 1], function (d) {
        return d[1];
      }),
    ])
    .range([0, width]);

  var y = d3
    .scaleBand()
    .domain(
      data.map(function (d) {
        return d.category;
      })
    )
    .range([height, 0])
    .padding(0.1);

  var color = d3.scaleOrdinal().range(["#e73921", "#5e83ba", "white"]);

  svg
    .selectAll(".bar")
    .data(stackedData)
    .enter()
    .append("g")
    .attr("class", "bar")
    .attr("fill", function (d, i) {
      return color(i);
    })
    .selectAll("rect")
    .data(function (d) {
      return d;
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d[0]);
    })
    .attr("y", function (d, i) {
      return y(data[i].category);
    })
    .attr("width", function (d) {
      return x(d[1]) - x(d[0]);
    })
    .attr("height", y.bandwidth());
}

function drawSummaryChart(red, blue, white) {
  const data = [
    { party: "Conservative", count: red },
    { party: "Progressive", count: blue },
    { party: "Independent", count: white },
  ];
  const totalPercentage = data.reduce((acc, d) => acc + d.count, 0);

  const svgWidth = 200;
  const svgHeight = 100;
  const barPadding = 5;

  const svg = d3
    .select("#summary")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * (svgHeight / data.length) + barPadding)
    .attr("width", (d) => (d.count / totalPercentage) * svgWidth)
    .attr("height", svgHeight / data.length - 2 * barPadding)
    .attr("fill", (d) => {
      if (d.party === "Conservative") return "#e73921";
      else if (d.party === "Progressive") return "#5e83ba";
      else return "white";
    });

  svg
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => `${d.party} (${d.count})`)
    .attr("x", 5)
    .attr(
      "y",
      (d, i) => i * (svgHeight / data.length) + svgHeight / data.length / 2
    )
    .attr("text-anchor", "start")
    .attr("fill", "black")
    .attr("alignment-baseline", "middle");
}
