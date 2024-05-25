function drawChart(name, fullDuration) {
  const ismobile = parseInt(name);
  const pollData = getPollDataByName(name);
  const startDate = fullDuration ? new Date("1940-01-01") : d3.min(pollData, d => d.date);
  const endDate = fullDuration ? new Date("2027-01-01") : d3.max(pollData, d => d.date);
  const width = document.getElementById('bar_chart').clientWidth;
  const height = document.getElementById('bar_chart').clientHeight * 0.6;

  const svg = d3.select("#bar_chart")
    .html("")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

  const x = d3.scaleTime()
    .domain([startDate, endDate])
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .nice()
    .range([height, 0]);

  const keys = ["노태우", "김영삼", "김대중", "노무현", "이명박", "박근혜", "문재인"];
  const stack = d3.stack()
    .keys(keys)
    .value((d, key) => {
      const valueObj = d.values.find(v => v.key === key);
      return valueObj ? valueObj.value : 0;
    });

    const fullDataCount = 572;
  const series = stack(pollData);

  svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))

  svg.append("g")
    .attr("class", "y-axis")

    const rectWidth = width / (ismobile ? series.length * 20 : fullDataCount) * 0.8;

  svg.selectAll(".serie")
    .data(series)
    .enter().append("g")
    .attr("class", "serie")
    .attr("fill", "black")
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("x", d => x(d.data.date) - rectWidth / 2)
    .attr("y", d => y(d[1]))
    .attr("height", d => (y(d[0]) - y(d[1])))
    .attr("width", rectWidth);
}

function drawStackedBarChart(values, width, height, appendTo) {
  var data = [
    { values: values },
  ];

  var stackedData = d3.stack()
    .keys(d3.range(data[0].values.length))
    (data.map(function (d) { return d.values; }));

  var svg = d3.select(appendTo)
    .append("svg")
    .attr("class", `${appendTo.slice(1)}_bar`)
    .append("g")

  var x = d3.scaleLinear()
    .domain([0, d3.max(stackedData[stackedData.length - 1], function (d) { return d[1]; })])
    .range([0, width]);

  var y = d3.scaleBand()
    .domain(data.map(function (d) { return d.category; }))
    .range([height, 0])
    .padding(0.1);

  var color = d3.scaleOrdinal()
    .range(["#e73921", "#5e83ba", "white"]);

  svg.selectAll(".bar")
    .data(stackedData)
    .enter().append("g")
    .attr("class", "bar")
    .attr("fill", function (d, i) { return color(i); })
    .selectAll("rect")
    .data(function (d) { return d; })
    .enter().append("rect")
    .attr("x", function (d) { return x(d[0]); })
    .attr("y", function (d, i) { return y(data[i].category); })
    .attr("width", function (d) { return x(d[1]) - x(d[0]); })
    .attr("height", y.bandwidth());
}

function drawSummaryChart(red, blue, white) {

  const data = [
    { party: "Conservative", count: red },
    { party: "Progressive", count: blue },
    { party: "Independent", count: white }
  ];


  const totalPercentage = data.reduce((acc, d) => acc + d.count, 0);


  const svgWidth = 100;
  const svgHeight = 100;
  const barPadding = 5;

  const svg = d3.select("#summary")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);


  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * (svgHeight / data.length) + barPadding)
    .attr("width", d => (d.count / totalPercentage) * svgWidth)
    .attr("height", svgHeight / data.length - 2 * barPadding)
    .attr("fill", d => {
      if (d.party === "Conservative") return "#e73921";
      else if (d.party === "Progressive") return "#5e83ba";
      else return "white";
    });


  svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(d => `${d.party} (${d.count})`)
    .attr("x", 5)
    .attr("y", (d, i) => i * (svgHeight / data.length) + (svgHeight / data.length) / 2)
    .attr("text-anchor", "start")
    .attr("fill", "black")
    .attr("alignment-baseline", "middle");
}