function drawChart(name) {
    const pollData = getPollData(name);
    const startDate = name ? d3.min(pollData, d => d.date) : new Date("1940-01-01");
    const endDate = d3.max(pollData, d => d.date);
    const width = document.getElementById('bar_chart').clientWidth;
    const height = document.getElementById('bar_chart').clientHeight * 0.6;
// SVG 요소 생성
const svg = d3.select("#bar_chart")
    .html("")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

// x축과 y축 설정
const x = d3.scaleTime()
    .domain([startDate, endDate])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([0, d3.max(pollData, d => d3.sum(d.values, v => v.value))])
    .nice()
    .range([height, 0]);

// 스택 생성
const keys = ["노태우", "김영삼", "김대중", "노무현", "이명박", "박근혜", "문재인"];
const stack = d3.stack()
    .keys(keys)
    .value((d, key) => {
        const valueObj = d.values.find(v => v.key === key);
        return valueObj ? valueObj.value : 0;
    });

const series = stack(pollData);

// x축 추가 (숫자 레이블 표시)
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(''))

// y축 추가 (숫자 레이블 표시)
svg.append("g")
    .attr("class", "y-axis")

// 막대 추가
svg.selectAll(".serie")
    .data(series)
    .enter().append("g")
    .attr("class", "serie")
    .attr("fill", "black")
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("x", d => x(d.data.date))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", width / pollData.length * 0.8);  // 적절한 막대 너비 설정
}