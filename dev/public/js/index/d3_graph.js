const svgWidth = 4751;
const svgHeight = 1049;
const width = svgWidth - 83;
const height = svgHeight;

const marginLeft = 20;
const rectHeight = height * 0.8 - 595;

const svg = d3
  .select("svg")
  .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .style("background-color", "#D6D6D6");

const chartGroup = svg
  .append("g")
  .attr("transform", `translate(${marginLeft}, 250)`);

const x = d3
  .scaleTime()
  .domain([new Date(1940, 0, 1), new Date(2027, 0, 1)])
  .range([0, width - marginLeft]);

const rectY = (height - rectHeight) / 2;

function appendRect(xPos, width, color) {
  chartGroup
    .append("rect")
    .attr("class", "rect")
    .attr("x", xPos)
    .attr("y", rectY)
    .attr("width", width)
    .attr("height", rectHeight)
    .attr("fill", color)
    .attr("opacity", 1);
}

for (let i = 0; i < smallBars.length - 1; i++) {
  appendRect(
    x(new Date(smallBars[i].year, 0, 1)),
    x(new Date(smallBars[i + 1].year, 0, 1)) -
      x(new Date(smallBars[i].year, 0, 1)),
    smallBars[i].color
  );
}

const lastPresidentYear = smallBars[smallBars.length - 1].year;
appendRect(
  x(new Date(lastPresidentYear, 0, 1)),
  x(new Date(2024, 0, 1)) - x(new Date(lastPresidentYear, 0, 1)),
  smallBars[smallBars.length - 1].color
);
appendRect(
  x(new Date(2024, 0, 1)),
  x(new Date(2027, 0, 1)) - x(new Date(2024, 0, 1)) - 83,
  LAST_COLOR
);

const lines = chartGroup
  .selectAll(".line")
  .data(smallBars)
  .enter()
  .append("line")
  .attr("class", "line")
  .attr("x1", (d) => x(new Date(d.year, 0, 1)))
  .attr("y1", height)
  .attr("x2", (d) => x(new Date(d.year, 0, 1)))
  .attr("y2", height * 0.2);

const nameLabels = chartGroup
  .selectAll(".name-label")
  .data(smallBars)
  .enter()
  .append("text")
  .attr("class", "name-label")
  .attr("x", (d) => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", (height + rectHeight) / 2 + 40)
  .attr("font-size", "30px")
  .attr("font-weight", "bold")
  .text((d) => d.name);

const yearLabels = chartGroup
  .selectAll(".year-label")
  .data(smallBars)
  .enter()
  .append("text")
  .attr("class", "year-label")
  .attr("x", (d) => x(new Date(d.year, 0, 1) ) + 20)
  .attr("y", height - 180)
  .attr("text-anchor", "middle")
  .attr("font-size", "40px")
  .text((d) => d.year);

chartGroup
  .selectAll(".circle")
  .data(smallBars)
  .enter()
  .append("line")
  .attr("class", "circle-line")
  .attr("x1", (d) => x(new Date(d.year, 0, 1)))
  .attr("y1", rectY)
  .attr("x2", (d) => x(new Date(d.year, 0, 1)))
  .attr("y2", height - 230)
  .attr("stroke", "black")
  .attr("stroke-width", 2);

chartGroup
  .selectAll(".big-line")
  .data(bigBars)
  .enter()
  .append("line")
  .attr("class", "big-line")
  .attr("x1", (d) => x(new Date(d.year, 0, 1)))
  .attr("y1", 5)
  .attr("x2", (d) => x(new Date(d.year, 0, 1)))
  .attr("y2", height - 83)
  .attr("stroke", "black")
  .attr("stroke-width", 2);

chartGroup
  .selectAll(".big-line-label")
  .data(bigBars)
  .enter()
  .append("text")
  .attr("class", "big-line-label")
  .attr("x", (d) => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", height - 1)
  .attr("text-anchor", "middle")
  .attr("font-size", "60px")
  .attr("font-weight", "bold")
  .text((d) => d.year);

const zoom = d3
  .zoom()
  .scaleExtent([1, 40])
  .translateExtent([
    [0, 0],
    [width, height],
  ])
  .extent([
    [0, 0],
    [width, height],
  ])
  .on("zoom", zoomed);

svg.call(zoom);

function zoomed(event) {
  const newX = event.transform.rescaleX(x);

  chartGroup
    .selectAll(".big-line")
    .attr("x1", (d) => newX(new Date(d.year, 0, 1)))
    .attr("x2", (d) => newX(new Date(d.year, 0, 1)));

  chartGroup
    .selectAll(".big-line-label")
    .attr("x", (d) => newX(new Date(d.year, 0, 1)) + 5);

  chartGroup
    .selectAll(".line")
    .attr("x1", (d) => newX(new Date(d.year, 0, 1)))
    .attr("x2", (d) => newX(new Date(d.year, 0, 1)));

  chartGroup
    .selectAll(".name-label")
    .attr("x", (d) => newX(new Date(d.year, 0, 1)) + 5);

  chartGroup
    .selectAll(".year-label")
    .attr("x", (d) => newX(new Date(d.year, 0, 1)) + 20);

  chartGroup
    .selectAll(".circle-line")
    .attr("x1", (d) => newX(new Date(d.year, 0, 1)))
    .attr("x2", (d) => newX(new Date(d.year, 0, 1)));

  chartGroup
    .selectAll(".rect")
    .attr("x", (d, i) => {
      if (i < smallBars.length - 1) {
        return newX(new Date(smallBars[i].year, 0, 1));
      } else if (i === smallBars.length - 1) {
        return newX(new Date(lastPresidentYear, 0, 1));
      } else {
        return newX(new Date(2024, 0, 1));
      }
    })
    .attr("width", (d, i) => {
      if (i < smallBars.length - 1) {
        return (
          newX(new Date(smallBars[i + 1].year, 0, 1)) -
          newX(new Date(smallBars[i].year, 0, 1))
        );
      } else if (i === smallBars.length - 1) {
        return (
          newX(new Date(2024, 0, 1)) - newX(new Date(lastPresidentYear, 0, 1))
        );
      } else {
        return newX(new Date(2027, 0, 1)) - newX(new Date(2024, 0, 1)) - 83;
      }
    });

  chartGroup
    .selectAll(".event")
    .attr("x1", (d) => newX(d.date))
    .attr("x2", (d) => newX(d.date));
}

const drag = d3.drag().on("drag", dragged);

svg.call(drag);

function dragged(event) {
  const dx = event.dx;

  const transform = d3.zoomTransform(svg.node());
  svg.call(zoom.translateBy, dx / transform.k, 0);
}

let zoomTransform = d3.zoomIdentity;

chartGroup
  .selectAll(".event")
  .data(eventBars)
  .enter()
  .append("line")
  .attr("class", "event")
  .attr("x1", (d) => x(d.date))
  .attr("y1", rectY / 2)
  .attr("x2", (d) => x(d.date))
  .attr("y2", rectY + rectHeight)
  .attr("stroke", "transparent")
  .attr("stroke-width", 1)
  .attr("opacity", 0.7)
  .on("mouseenter", showEventData)
  .on("mouseout", hideEventData);

function showEventData(event, d) {
  const mouseX = event.pageX;
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("font-size", "51px")//Home 툴팁 글자크기
    .style("top", height + 100 + "px")//툴팁 위치(높이)
    .style("position", "absolute")
    .style("color", "black")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("pointer-events", "none")
    .html(
      `<span style="font-weight:bold;">${d.date.getFullYear()}/${
        d.date.getMonth() + 1
      }/${d.date.getDate()}</span>
      <br/>${d.title}`
    );

  this.setAttribute("stroke", "black");

  let tooltipX = mouseX + 10;
  const tooltipNode = tooltip.node();
  const tooltipRect = tooltipNode.getBoundingClientRect();

  const windowWidth = window.innerWidth;
  if (tooltipX + tooltipRect.width > windowWidth) {
    tooltipX = windowWidth - tooltipRect.width - 10;
  }
  tooltip.style("left", tooltipX + "px");
}

function hideEventData() {
  d3.selectAll(".tooltip").remove();
  this.setAttribute("stroke", "transparent");
}