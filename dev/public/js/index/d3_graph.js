const svgWidth = 1700;
const svgHeight = 300;
const width = svgWidth - 30;
const height = svgHeight;

const marginLeft = 20;
const rectHeight = height * 0.8 - 170;

const svg = d3.select("svg")
  .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .style("background-color", "#D6D6D6");

const chartGroup = svg.append("g")
  .attr("transform", `translate(${marginLeft}, 0)`);

const x = d3.scaleTime()
  .domain([new Date(1940, 0, 1), new Date(2027, 0, 1)])
  .range([0, width - marginLeft]);

const rectY = (height - rectHeight) / 2;

function appendRect(xPos, width, color) {
  chartGroup.append("rect")
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
    x(new Date(smallBars[i + 1].year, 0, 1)) - x(new Date(smallBars[i].year, 0, 1)),
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
  x(new Date(2027, 0, 1)) - x(new Date(2024, 0, 1)) - 30,
  LAST_COLOR
);

const lines = chartGroup.selectAll(".line")
  .data(smallBars)
  .enter().append("line")
  .attr("class", "line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", height)
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", height * 0.2);

const nameLabels = chartGroup.selectAll(".name-label")
  .data(smallBars)
  .enter().append("text")
  .attr("class", "name-label")
  .attr("x", d => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", (height + rectHeight) / 2 + 20)
  .attr("font-size", "12px")
  .text(d => d.name);

const yearLabels = chartGroup.selectAll(".year-label")
  .data(smallBars)
  .enter().append("text")
  .attr("class", "year-label")
  .attr("x", d => x(new Date(d.year, 0, 1)))
  .attr("y", height - 45)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .text(d => d.year);

chartGroup.selectAll(".circle")
  .data(smallBars)
  .enter().append("line")
  .attr("class", "circle-line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", rectY)
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", height - 60)
  .attr("stroke", "black")
  .attr("stroke-width", 1);

chartGroup.selectAll(".big-line")
  .data(bigBars)
  .enter().append("line")
  .attr("class", "big-line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", 5)
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", height - 20)
  .attr("stroke", "black")
  .attr("stroke-width", 1.5);

chartGroup.selectAll(".big-line-label")
  .data(bigBars)
  .enter().append("text")
  .attr("class", "big-line-label")
  .attr("x", d => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", height - 5)
  .attr("text-anchor", "middle")
  .text(d => d.year);

const zoom = d3.zoom()
  .scaleExtent([1, 40])
  .translateExtent([[0, 0], [width, height]])
  .extent([[0, 0], [width, height]])
  .on("zoom", zoomed);

svg.call(zoom);

function zoomed(event) {
  const newX = event.transform.rescaleX(x);

  chartGroup.selectAll(".big-line")
    .attr("x1", d => newX(new Date(d.year, 0, 1)))
    .attr("x2", d => newX(new Date(d.year, 0, 1)));

  chartGroup.selectAll(".big-line-label")
    .attr("x", d => newX(new Date(d.year, 0, 1)) + 5);

  chartGroup.selectAll(".line")
    .attr("x1", d => newX(new Date(d.year, 0, 1)))
    .attr("x2", d => newX(new Date(d.year, 0, 1)));

  chartGroup.selectAll(".name-label")
    .attr("x", d => newX(new Date(d.year, 0, 1)) + 5);

  chartGroup.selectAll(".year-label")
    .attr("x", d => newX(new Date(d.year, 0, 1)));

  chartGroup.selectAll(".circle-line")
    .attr("x1", d => newX(new Date(d.year, 0, 1)))
    .attr("x2", d => newX(new Date(d.year, 0, 1)));

  chartGroup.selectAll(".rect")
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
        return newX(new Date(smallBars[i + 1].year, 0, 1)) - newX(new Date(smallBars[i].year, 0, 1));
      } else if (i === smallBars.length - 1) {
        return newX(new Date(2024, 0, 1)) - newX(new Date(lastPresidentYear, 0, 1));
      } else {
        return newX(new Date(2027, 0, 1)) - newX(new Date(2024, 0, 1)) - 30;
      }
    });

  chartGroup.selectAll(".event")
    .attr("x1", d => newX(d.date))
    .attr("x2", d => newX(d.date));
}

const drag = d3.drag()
  .on("drag", dragged);

svg.call(drag);

function dragged(event) {
  const dx = event.dx;

  const transform = d3.zoomTransform(svg.node());
  svg.call(zoom.translateBy, dx / transform.k, 0);
}

let zoomTransform = d3.zoomIdentity;

chartGroup.selectAll(".event")
  .data(eventBars)
  .enter().append("line")
  .attr("class", "event")
  .attr("x1", d => x(d.date))
  .attr("y1", 0)
  .attr("x2", d => x(d.date))
  .attr("y2", rectY + rectHeight)
  .attr("stroke", "transparent")
  .attr("stroke-width", 3)
  .attr("opacity", 0.7)
  .on("mouseenter", showEventData)
  .on("mouseout", hideEventData);

function showEventData(event, d) {
  const mouseX = event.pageX;
  const mouseY = event.pageY;
  d3.select("body").append("div")
    .attr("class", "tooltip")
    .attr("font-size", "12px")
    .style("left", (mouseX - 10) + "px")
    .style("top", (mouseY - 100) + "px")
    .style("position", "absolute")
    .style("color", "black")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("pointer-events", "none")
    .style("background-color", "#D6D6D6")
    .text(`${d.date.getFullYear()}-${d.date.getMonth() + 1}-${d.date.getDate()}: ${d.title}`);
    this.setAttribute("stroke", "black");
}

function hideEventData() {
  d3.selectAll(".tooltip").remove();
  this.setAttribute("stroke", "transparent");
}
