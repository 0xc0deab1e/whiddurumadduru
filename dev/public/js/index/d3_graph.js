const RED = '#E73924';
const BLUE = '#5E83BA';
const WHITE = '#FFFFFF';
const LAST_COLOR = '#EA6969';
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

const eventBars = [
  { date: new Date(1905, 6, 9), title: "제 19대 대통령 당선" },
  { date: new Date(1942, 5, 13), title: "워싱턴 연설" },
  { date: new Date(1948, 7, 23), title: "군사통수권 이양" },
  { date: new Date(1948, 7, 25), title: "무쵸 미 특사와 회담" },
  { date: new Date(1948, 8, 3), title: "트루먼 미 대통령에 경제원조 요청" },
  { date: new Date(1948, 8, 4), title: "반민족행위처벌법 제정" },
  { date: new Date(1948, 8, 22), title: "반민족행위특별법 시행" },
  { date: new Date(1948, 9, 19), title: "여순사건" },
];
const svgWidth = 1680;
const svgHeight = 300;
const width = svgWidth;
const height = svgHeight;

const rectHeight = height * 0.8 - 170; // 위아래로 85픽셀씩 줄임

const svg = d3.select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("background-color", "#D6D6D6");

const chartGroup = svg.append("g");

const x = d3.scaleTime()
  .domain([new Date(1940, 0, 1), new Date(2027, 0, 1)])
  .range([0, width]);

// big-line을 검은색 직선으로 설정하고 위치 조정
chartGroup.selectAll(".big-line")
  .data(bigBars)
  .enter().append("line")
  .attr("class", "big-line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", 5) // SVG의 위쪽에서 5픽셀 아래
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", height - 20) // SVG의 아래쪽에서 10픽셀 위
  .attr("stroke", "black")
  .attr("stroke-width", 1.5);

chartGroup.selectAll(".big-line-label")
  .data(bigBars)
  .enter().append("text")
  .attr("class", "big-line-label")
  .attr("x", d => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", height - 5)
  .attr("text-anchor", "middle") // 중앙 정렬
  .text(d => d.year);

const rectY = (height - rectHeight) / 2; // rect의 y 위치 계산

function appendRect(xPos, width, color) {
  chartGroup.append("rect")
    .attr("class", "rect")
    .attr("x", xPos)
    .attr("y", rectY) // 30픽셀 위쪽으로 이동
    .attr("width", width)
    .attr("height", rectHeight)
    .attr("fill", color)
    .attr("opacity", 0.5);
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
  x(new Date(2027, 0, 1)) - x(new Date(2024, 0, 1)),
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

// name 레이블을 유지
const nameLabels = chartGroup.selectAll(".name-label")
  .data(smallBars)
  .enter().append("text")
  .attr("class", "name-label")
  .attr("x", d => x(new Date(d.year, 0, 1)) + 5)
  .attr("y", (height + rectHeight) / 2 + 20) // rect 요소의 아래에 배치
  .text(d => d.name);

// year 레이블을 중앙에 배치
const yearLabels = chartGroup.selectAll(".year-label")
  .data(smallBars)
  .enter().append("text")
  .attr("class", "year-label")
  .attr("x", d => x(new Date(d.year, 0, 1)))
  .attr("y", height - 45) // circle-line과 겹치지 않도록 아래로 조정
  .attr("text-anchor", "middle")
  .text(d => d.year);


// 기존의 circle 요소를 교체하여 직선으로 변경
chartGroup.selectAll(".circle")
  .data(smallBars)
  .enter().append("line")
  .attr("class", "circle-line")
  .attr("x1", d => x(new Date(d.year, 0, 1)))
  .attr("y1", rectY) // rect의 윗부분과 동일하게 맞춤
  .attr("x2", d => x(new Date(d.year, 0, 1)))
  .attr("y2", height - 60)
  .attr("stroke", "black")
  .attr("stroke-width", 1);

// zoom 함수에서 기존의 circle 요소 업데이트를 직선으로 변경
chartGroup.selectAll(".circle-line")
  .attr("x1", d => newX(new Date(d.year, 0, 1)))
  .attr("x2", d => newX(new Date(d.year, 0, 1)));

const zoom = d3.zoom()
  .scaleExtent([1, 40])
  .translateExtent([[0, 0], [width, height]])
  .extent([[0, 0], [width, height]])
  .on("zoom", zoomed);

svg.call(zoom);

function zoomed(event) {
  const newX = event.transform.rescaleX(x);

  // big-line을 검은색 직선으로 설정하고 위치 조정
  chartGroup.selectAll(".big-line")
    .data(bigBars)
    .enter().append("line")
    .attr("class", "big-line")
    .attr("x1", d => x(new Date(d.year, 0, 1)))
    .attr("y1", 5) // SVG의 위쪽에서 5픽셀 아래
    .attr("x2", d => x(new Date(d.year, 0, 1)))
    .attr("y2", height - 10) // SVG의 아래쪽에서 10픽셀 위
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);

  chartGroup.selectAll(".big-line-label")
    .attr("x", d => newX(new Date(d.year, 0, 1)) + 5);

  chartGroup.selectAll(".line")
    .attr("x1", d => newX(new Date(d.year, 0, 1)))
    .attr("x2", d => newX(new Date(d.year, 0, 1)));

  chartGroup.selectAll(".label")
    .attr("x", d => newX(new Date(d.year, 0, 1)) + 5);

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
        return newX(new Date(2027, 0, 1)) - newX(new Date(2024, 0, 1));
      }
    });
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
  .attr("y1", 5)  // 시작 y 좌표
  .attr("x2", d => x(d.date))
  .attr("y2", height - 5)  // 끝 y 좌표
  .attr("stroke", "transparent")
  .attr("stroke-width", 2)
  .attr("opacity", 0.7)
  .on("mouseenter", showEventData)
  .on("mouseout", hideEventData);

function showEventData(event, d) {
  const mouseX = event.pageX;
  const mouseY = event.pageY;
  d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("left", mouseX + "px")
    .style("top", (mouseY - 20) + "px")  // 마우스 포인터 위쪽으로 20픽셀 이동
    .style("position", "absolute")
    // .style("background-color", "rgba(0, 0, 0, 0.7)") // 배경색 제거
    .style("color", "black")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .text(`${d.date.getFullYear()}-${d.date.getMonth() + 1}-${d.date.getDate()}: ${d.title}`);
}

function hideEventData() {
  d3.selectAll(".tooltip").remove();
}
