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

const svgWidth = 430;
const svgHeight = 1240;
const width = svgWidth;
const height = svgHeight;

const rectWidth = width * 0.1 - 10;
const rectX = (width - rectWidth) / 2 + 90;

const svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("background-color", "#D6D6D6");

const chartGroup = svg.append("g")
    .attr("transform", "translate(0, 100)");

const y = d3.scaleTime()
    .domain([new Date(1940, 0, 1), new Date(2027, 0, 1)])
    .range([0, height - 300]);

chartGroup.selectAll(".big-line")
    .data(bigBars)
    .enter().append("line")
    .attr("class", "big-line")
    .attr("x1", rectX - 80)
    .attr("y1", d => y(new Date(d.year, 0, 1)))
    .attr("x2", rectX + rectWidth + 30)
    .attr("y2", d => y(new Date(d.year, 0, 1)))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

chartGroup.selectAll(".big-line-label")
    .data(bigBars)
    .enter().append("text")
    .attr("class", "big-line-label")
    .attr("x", rectX + rectWidth + 35)
    .attr("y", d => y(new Date(d.year, 0, 1)) + 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "8px")
    .text(d => d.year);

function appendRect(yPos, height, color) {
    chartGroup.append("rect")
        .attr("class", "rect")
        .attr("x", rectX)
        .attr("y", yPos)
        .attr("width", rectWidth)
        .attr("height", height)
        .attr("fill", color)
        .attr("opacity", 0.5);
}

for (let i = 0; i < smallBars.length - 1; i++) {
    appendRect(
        y(new Date(smallBars[i].year, 0, 1)),
        y(new Date(smallBars[i + 1].year, 0, 1)) - y(new Date(smallBars[i].year, 0, 1)),
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

const lines = chartGroup.selectAll(".line")
    .data(smallBars)
    .enter().append("line")
    .attr("class", "line")
    .attr("x1", rectX - 50)
    .attr("y1", d => y(new Date(d.year, 0, 1)))
    .attr("x2", rectX + rectWidth + 20)
    .attr("y2", d => y(new Date(d.year, 0, 1)));

const nameLabels = chartGroup.selectAll(".name-label")
    .data(smallBars)
    .enter().append("text")
    .attr("class", "name-label")
    .attr("x", rectX - 55) // 이름 라벨 위치 수정
    .attr("y", d => y(new Date(d.year, 0, 1)) + 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "8px")
    .text(d => d.name);

const yearLabels = chartGroup.selectAll(".year-label")
    .data(smallBars)
    .enter().append("text")
    .attr("class", "year-label")
    .attr("x", rectX + rectWidth + 25) // 년도 라벨 위치 수정
    .attr("y", d => y(new Date(d.year, 0, 1)) + 5)
    .attr("font-size", "8px")
    .text(d => d.year);

chartGroup.selectAll(".circle-line")
    .data(smallBars)
    .enter().append("line")
    .attr("class", "circle-line")
    .attr("x1", rectX - 50)
    .attr("y1", d => y(new Date(d.year, 0, 1)))
    .attr("x2", rectX + rectWidth + 20)
    .attr("y2", d => y(new Date(d.year, 0, 1)))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

const zoom = d3.zoom()
    .scaleExtent([1, 40])
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .on("zoom", zoomed);

svg.call(zoom);

function zoomed(event) {
    const newY = event.transform.rescaleY(y);

    chartGroup.selectAll(".big-line")
        .attr("y1", d => newY(new Date(d.year, 0, 1)))
        .attr("y2", d => newY(new Date(d.year, 0, 1)));

    chartGroup.selectAll(".big-line-label")
        .attr("y", d => newY(new Date(d.year, 0, 1)) + 5);

    chartGroup.selectAll(".line")
        .attr("y1", d => newY(new Date(d.year, 0, 1)))
        .attr("y2", d => newY(new Date(d.year, 0, 1)));

    chartGroup.selectAll(".name-label")
        .attr("y", d => newY(new Date(d.year, 0, 1)) + 5);

    chartGroup.selectAll(".year-label")
        .attr("y", d => newY(new Date(d.year, 0, 1)) + 5);

    chartGroup.selectAll(".circle-line")
        .attr("y1", d => newY(new Date(d.year, 0, 1)))
        .attr("y2", d => newY(new Date(d.year, 0, 1)));

    chartGroup.selectAll(".rect")
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
                return newY(new Date(smallBars[i + 1].year, 0, 1)) - newY(new Date(smallBars[i].year, 0, 1));
            } else if (i === smallBars.length - 1) {
                return newY(new Date(2024, 0, 1)) - newY(new Date(lastPresidentYear, 0, 1));
            } else {
                return newY(new Date(2027, 0, 1)) - newY(new Date(2024, 0, 1));
            }
        });
}

const drag = d3.drag()
    .on("drag", dragged);

svg.call(drag);

function dragged(event) {
    const dy = event.dy;

    const transform = d3.zoomTransform(svg.node());
    svg.call(zoom.translateBy, 0, dy / transform.k);
}

let zoomTransform = d3.zoomIdentity;

chartGroup.selectAll(".event")
    .data(eventBars)
    .enter().append("line")
    .attr("class", "event")
    .attr("x1", 5)
    .attr("y1", d => y(d.date))
    .attr("x2", width - 5)
    .attr("y2", d => y(d.date))
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
        .style("left", (mouseX + 10) + "px")
        .style("top", (mouseY - 20) + "px")
        .style("position", "absolute")
        .style("color", "black")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .text(`${d.date.getFullYear()}-${d.date.getMonth() + 1}-${d.date.getDate()}: ${d.title}`);
}

function hideEventData() {
    d3.selectAll(".tooltip").remove();
}
