const svgWidth = document.documentElement.clientWidth;
const svgHeight = document.documentElement.clientHeight + 100;
const width = svgWidth;
const height = svgHeight;

const rectWidth = width * 0.1 - 10;
const rectX = (width - rectWidth) / 2 + 90 - width * 0.2;

const svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("background-color", "#D6D6D6");

const translateY = (() => {
  function getTranslateY() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 376) {
      return 10;
    } else if (screenWidth < 769) {
      return 30;
    } else {
      return 50;
    }
  }

  return getTranslateY();
})();

const chartGroup = svg
  .append("g")
  .attr(
    "transform",
    `translate(${width * -0.1}, ${translateY + svgHeight * 0.01})`
  );

const y = d3
  .scaleTime()
  .domain([new Date(1940, 0, 1), new Date(2027, 0, 1)])
  .range([0, svgHeight - 300]);

svg
  .append("text")
  .attr("x", 20)
  .attr("y", svgHeight - 200)
  .attr("fill", "gray")
  .style("font-size", "13px")
  .style("font-weight", 1200);

chartGroup
  .selectAll(".big-line")
  .data(bigBars)
  .enter()
  .append("line")
  .attr("class", "big-line")
  .attr("x1", rectX - 80)
  .attr("y1", (d) => y(new Date(d.year, 0, 1)))
  .attr("x2", rectX + rectWidth + 30)
  .attr("y2", (d) => y(new Date(d.year, 0, 1)))
  .attr("stroke", "black")
  .attr("stroke-width", 0.2);

chartGroup
  .selectAll(".big-line-label")
  .data(bigBars)
  .enter()
  .append("text")
  .attr("class", "big-line-label")
  .attr("x", rectX + rectWidth + 55)
  .attr("y", (d) => y(new Date(d.year, 0, 1)) + 5)
  .attr("text-anchor", "middle")
  .attr("font-size", "25px")
  .text((d) => d.year);

for (let i = 0; i < smallBars.length - 1; i++) {
  appendRect(
    y(new Date(smallBars[i].year, 0, 1)),
    y(new Date(smallBars[i + 1].year, 0, 1)) -
      y(new Date(smallBars[i].year, 0, 1)),
    smallBars[i].color
  );
}

const lastPresidentYear = smallBars[smallBars.length - 1].year;
appendRect(
  y(new Date(lastPresidentYear, 0, 1)),
  y(new Date(2024, 0, 1)) - y(new Date(lastPresidentYear, 0, 1)),
  smallBars[smallBars.length - 1].color
);
appendRect(
  y(new Date(2024, 0, 1)),
  y(new Date(2027, 0, 1)) - y(new Date(2024, 0, 1)),
  LAST_COLOR
);

const lines = chartGroup
  .selectAll(".line")
  .data(smallBars)
  .enter()
  .append("line")
  .attr("class", "line")
  .attr("x1", rectX - 50)
  .attr("y1", (d) => y(new Date(d.year, 0, 1)))
  .attr("x2", rectX + rectWidth + 30)
  .attr("y2", (d) => y(new Date(d.year, 0, 1)));

const nameLabels = chartGroup
  .selectAll(".name-label")
  .data(smallBars)
  .enter()
  .append("text")
  .attr("class", "name-label")
  .attr("x", rectX - 30)
  .attr("y", (d) => y(new Date(d.year, 0, 1)) + 15)
  .attr("text-anchor", "middle")
  .attr("font-size", "12px")
  .text((d) => d.name);

const yearLabels = chartGroup
  .selectAll(".year-label")
  .data(smallBars)
  .enter()
  .append("text")
  .attr("class", "year-label")
  .attr("x", rectX + rectWidth + 5)
  .attr("y", (d) => y(new Date(d.year, 0, 1)) + 5)
  .attr("font-size", "12px")
  .text((d) => d.year);

chartGroup
  .selectAll(".circle-line")
  .data(smallBars)
  .enter()
  .append("line")
  .attr("class", "circle-line")
  .attr("x1", rectX - 80)
  .attr("y1", (d) => y(new Date(d.year, 0, 1)))
  .attr("x2", rectX + rectWidth)
  .attr("y2", (d) => y(new Date(d.year, 0, 1)))
  .attr("stroke", "black")
  .attr("stroke-width", 0.2);

function appendRect(yPos, height, color) {
  chartGroup
    .append("rect")
    .attr("class", "rect")
    .attr("x", rectX)
    .attr("y", yPos)
    .attr("width", rectWidth)
    .attr("height", height)
    .attr("fill", color)
    .attr("opacity", 1);
}

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
  const newY = event.transform.rescaleY(y);

  chartGroup
    .selectAll(".big-line")
    .attr("y1", (d) => newY(new Date(d.year, 0, 1)))
    .attr("y2", (d) => newY(new Date(d.year, 0, 1)));

  chartGroup
    .selectAll(".big-line-label")
    .attr("y", (d) => newY(new Date(d.year, 0, 1)) + 5);

  chartGroup
    .selectAll(".line")
    .attr("y1", (d) => newY(new Date(d.year, 0, 1)))
    .attr("y2", (d) => newY(new Date(d.year, 0, 1)));

  chartGroup
    .selectAll(".name-label")
    .attr("y", (d) => newY(new Date(d.year, 0, 1)) + 15);

  chartGroup
    .selectAll(".year-label")
    .attr("y", (d) => newY(new Date(d.year, 0, 1)) + 5);

  chartGroup
    .selectAll(".circle-line")
    .attr("y1", (d) => newY(new Date(d.year, 0, 1)))
    .attr("y2", (d) => newY(new Date(d.year, 0, 1)));
  chartGroup
    .selectAll(".rect")
    .attr("y", (d, i) => {
      if (i < smallBars.length - 1) {
        return newY(new Date(smallBars[i].year, 0, 1));
      } else if (i === smallBars.length - 1) {
        return newY(new Date(lastPresidentYear, 0, 1));
      } else {
        return newY(new Date(2024, 0, 1));
      }
    })
    .attr("height", (d, i) => {
      if (i < smallBars.length - 1) {
        return (
          newY(new Date(smallBars[i + 1].year, 0, 1)) -
          newY(new Date(smallBars[i].year, 0, 1))
        );
      } else if (i === smallBars.length - 1) {
        return (
          newY(new Date(2024, 0, 1)) - newY(new Date(lastPresidentYear, 0, 1))
        );
      } else {
        return newY(new Date(2027, 0, 1)) - newY(new Date(2024, 0, 1));
      }
    });

  chartGroup
    .selectAll(".event")
    .attr("y1", (d) => newY(d.date))
    .attr("y2", (d) => newY(d.date));
}

const drag = d3.drag().on("drag", dragged);

svg.call(drag);

function dragged(event) {
  const dy = event.dy;

  const transform = d3.zoomTransform(svg.node());
  svg.call(zoom.translateBy, 0, dy / transform.k);
}

let zoomTransform = d3.zoomIdentity;

chartGroup
  .selectAll(".event")
  .data(eventBars)
  .enter()
  .append("line")
  .attr("class", "event")
  .attr("x1", rectX - 80)
  .attr("y1", (d) => y(d.date))
  .attr("x2", rectX + rectWidth)
  .attr("y2", (d) => y(d.date))
  .attr("stroke", "transparent")
  .attr("stroke-width", 2)
  .attr("opacity", 0.7)
  .on("mouseenter", showEventData)
  .on("mouseout", hideEventData)
  .on("touchstart", showEventData)
  .on("touchend", hideEventData);

function showEventData(event, d) {
  this.setAttribute("stroke", "black");
  const mouseY = event.pageY;
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("top", `${mouseY - 10}px`)
    .style("position", "absolute")
    .style("color", "black")
    .style("padding", "5px")
    .style("font-size", "12px")
    .style("background-color", "transparent")
    .style("border", "none")
    .style("text-align", "right")
    .html(
      `<span style="font-weight:900;">${d.date.getFullYear()}/${
        d.date.getMonth() + 1
      }/${d.date.getDate()}</span><br>${d.title}`
    );

  const tooltipNode = tooltip.node();
  const tooltipRect = tooltipNode.getBoundingClientRect();

  const tooltipX = Math.max(0, rectX - tooltipRect.width - 20);
  tooltip.style("left", tooltipX + "px");
}

function hideEventData() {
  d3.selectAll(".tooltip").remove();
  this.setAttribute("stroke", "transparent");
}
