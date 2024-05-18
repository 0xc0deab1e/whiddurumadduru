// 색상 설정
const RED = '#e73921';
const BLUE = '#5e83ba';
const WHITE = 'white';
const SPECIAL_COLOR = '#ff0000';

// 데이터 설정
const bigBars = [
  { year: 1940 }, { year: 1950 }, { year: 1960 }, { year: 1970 },
  { year: 1980 }, { year: 1990 }, { year: 2000 }, { year: 2010 },
  { year: 2020 }, { year: 2024 }, { year: 2027 }
];

const smallBars = [
  { year: 1948, name: '이승만', color: RED },
  { year: 1960, name: '윤보선', color: BLUE },
  { year: 1963, name: '박정희', color: RED },
  { year: 1979, name: '최규하', color: WHITE },
  { year: 1980, name: '전두환', color: RED },
  { year: 1988, name: '노태우', color: RED },
  { year: 1993, name: '김영삼', color: RED },
  { year: 1998, name: '김대중', color: BLUE },
  { year: 2003, name: '노무현', color: BLUE },
  { year: 2008, name: '이명박', color: RED },
  { year: 2013, name: '박근혜', color: RED },
  { year: 2017, name: '문재인', color: BLUE },
  { year: 2022, name: '윤석열', color: RED }
];

// Define eventBars with predefined events
const eventBars = [
  { date: new Date(1955, 4, 14), title: "Birth of D3.js" },
  { date: new Date(2001, 6, 27), title: "Release of D3.js 1.0" },
  { date: new Date(2011, 10, 11), title: "Release of D3.js 2.0" },
  { date: new Date(2020, 3, 1), title: "Major Update: D3.js 5.0" },
];


// SVG 설정
const svgWidth = 960;
const svgHeight = 500;
const width = svgWidth;
const height = svgHeight;

const rectHeight = height * 0.8; // 영역 높이 설정 (80%)

const svg = d3.select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const chartGroup = svg.append("g");

// x 축 설정 (Date 객체 사용)
const x = d3.scaleTime()
  .domain([new Date(1940, 0, 1), new Date(2027, 0, 1)])
  .range([0, width]);

// 큰 막대기 추가
chartGroup.selectAll(".big-line")
  .data(bigBars)
  .enter().append("line")
  .attr("class", "big-line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", height)
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", 0);

// 큰 막대기 텍스트 레이블 추가
chartGroup.selectAll(".big-line-label")
  .data(bigBars)
  .enter().append("text")
  .attr("class", "big-line-label")
  .attr("x", d => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", height - 5)
  .text(d => d.year);

// 사각형 영역 추가
for (let i = 0; i < smallBars.length - 1; i++) {
  chartGroup.append("rect")
    .attr("class", "rect")
    .attr("x", x(new Date(smallBars[i].year, 0, 1)))
    .attr("y", (height - rectHeight) / 2) // 중앙에 배치
    .attr("width", x(new Date(smallBars[i + 1].year, 0, 1)) - x(new Date(smallBars[i].year, 0, 1)))
    .attr("height", rectHeight)
    .attr("fill", smallBars[i].color)
    .attr("opacity", 0.5)
}

// 마지막 대통령부터 2024년까지의 사각형 영역 추가
const lastPresidentYear = smallBars[smallBars.length - 1].year;
chartGroup.append("rect")
  .attr("class", "rect")
  .attr("x", x(new Date(lastPresidentYear, 0, 1)))
  .attr("y", (height - rectHeight) / 2) // 중앙에 배치
  .attr("width", x(new Date(2024, 0, 1)) - x(new Date(lastPresidentYear, 0, 1)))
  .attr("height", rectHeight)
  .attr("fill", smallBars[smallBars.length - 1].color)
  .attr("opacity", 0.5)

// 2024년부터 2027년까지의 사각형 영역 추가
chartGroup.append("rect")
  .attr("class", "rect")
  .attr("x", x(new Date(2024, 0, 1)))
  .attr("y", (height - rectHeight) / 2) // 중앙에 배치
  .attr("width", x(new Date(2027, 0, 1)) - x(new Date(2024, 0, 1)))
  .attr("height", rectHeight)
  .attr("fill", SPECIAL_COLOR)
  .attr("opacity", 0.5)

// 작은 막대기 추가
const lines = chartGroup.selectAll(".line")
  .data(smallBars)
  .enter().append("line")
  .attr("class", "line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", height)
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", height * 0.2); // 작은 막대기는 높이의 20%까지만

// 텍스트 레이블 추가 (작은 막대기)
const labels = chartGroup.selectAll(".label")
  .data(smallBars)
  .enter().append("text")
  .attr("class", "label")
  .attr("x", d => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", height * 0.2 - 5)
  .text(d => `${d.year} ${d.name}`);

// 원 추가 (작은 막대기)
const circles = chartGroup.selectAll(".circle")
  .data(smallBars)
  .enter().append("circle")
  .attr("class", "circle")
  .attr("cx", d => x(new Date(d.year, 0, 1)))
  .attr("cy", height * 0.2)
  .attr("r", 5)
  .attr("fill", "black");

// 줌 핸들러 설정
const zoom = d3.zoom()
  .scaleExtent([1, 10])  // 줌 범위 설정
  .translateExtent([[0, 0], [width, height]])
  .extent([[0, 0], [width, height]])
  .on("zoom", zoomed);

svg.call(zoom);

// 줌 함수
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

  chartGroup.selectAll(".label")
    .attr("x", d => newX(new Date(d.year, 0, 1)) + 5);

  chartGroup.selectAll(".circle")
    .attr("cx", d => newX(new Date(d.year, 0, 1)));

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
        return newX(new Date(2027, 0, 1)) - newX(new Date(2024, 0, 1));
      }
    });
  chartGroup.selectAll(".event")
  .attr("cx", d => newX(d.date));
  // 줌된 x 스케일을 저장하여 나중에 사용
  zoomTransform = event.transform;
}

// 드래그 핸들러 설정
const drag = d3.drag()
  .on("drag", dragged);

svg.call(drag);

// 드래그 함수
function dragged(event) {
  const dx = event.dx;

  const transform = d3.zoomTransform(svg.node());
  svg.call(zoom.translateBy, dx / transform.k, 0);
}

// 줌된 x 스케일을 저장할 변수
let zoomTransform = d3.zoomIdentity;

// Add eventBars to the chart
chartGroup.selectAll(".event")
  .data(eventBars)
  .enter().append("circle")
  .attr("class", "event")
  .attr("cx", d => x(d.date))
  .attr("cy", height * 0.5) // Centered vertically
  .attr("r", 8)
  .attr("fill", "green")
  .attr("opacity", 0.7)
  .on("mouseenter", showEventData)
  .on("mouseout", hideEventData);

// Function to display event data when mouse enters the circle
function showEventData(event, d) {
  const mouseX = d3.pointer(event)[0];
  const mouseY = d3.pointer(event)[1];
  chartGroup.append("text")
    .attr("class", "tooltip")
    .attr("x", mouseX + 10)
    .attr("y", mouseY - 10)
    .style("position", "absolute")
    .style("background-color", "rgba(0, 0, 0, 0.7)")
    .style("color", "white")
    .style("padding", "5px")
    .style("border-radius", "5px")
.text(`${d.date.getFullYear()}-${d.date.getMonth() + 1}-${d.date.getDate()}: ${d.title}`)
    .attr("font-size", "12px");
}

// Function to hide event data when mouse leaves the circle
function hideEventData() {
  chartGroup.selectAll(".tooltip").remove();
}
