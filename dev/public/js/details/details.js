function getVoteDataByDate(date) {
    const VoteData = [{ date: new Date("1940-01-01"), value: [91.80, '180', '이승만']},
    { date: new Date("1950-01-01"), value: [74.60, '5,238,769', '이승만'] },
    { date: new Date("1955-01-01"), value: [70.00, '5,046,437', '이승만'] },
    { date: new Date("1960-01-01"), value: [79.10, '208', '윤보선'] },
    { date: new Date("1966-01-01"), value: [46.60, '4,702,640', '박정희'] },
    { date: new Date("1970-01-01"), value: [51.40, '5,688,666', '박정희'] },
    { date: new Date("1977-01-01"), value: [53.20, '6,342,828', '박정희'] },
    { date: new Date("1980-01-01"), value: [99.90, '2,357', '박정희'] },
    { date: new Date("1985-01-01"), value: [99.80, '2,577', '박정희'] },
    { date: new Date("1990-01-01"), value: [96.30, '2,465', '최규하'] },
    { date: new Date("1995-01-01"), value: [99.40, '2,524', '전두환'] },
    { date: new Date("1999-01-01"), value: [90.10, '4,755', '전두환'] },
    { date: new Date("2000-01-01"), value: [36.60, '8,282,738', '노태우'] },
    { date: new Date("2002-01-01"), value: [42.00, '9,977,332', '김영삼'] },
    { date: new Date("2004-01-01"), value: [40.30, '10,326,275', '김대중'] },
    { date: new Date("2006-01-01"), value: [48.90, '12,014,277', '노무현'] },
    { date: new Date("2008-01-01"), value: [48.70, '11,492,389', '이명박'] },
    { date: new Date("2010-01-01"), value: [51.60, '15,773,128', '박근혜'] },
    { date: new Date("2020-01-01"), value: [41.10, '13,423,800', '문재인'] },
    { date: new Date("2024-01-01"), value: [48.60, '16,394,815', '윤석열'] }];
    return VoteData.filter(x => x.date <= date).sort((x, y) => y.date - x.date)[0].value;
}

function getRepresentativesByDate(date) {
    const representatives = [
        { date: new Date("1940-01-01"), value: [80, 70, 20] },
        { date: new Date("1950-01-01"), value: [70, 70, 100] },
        { date: new Date("1960-01-01"), value: [60, 70, 20] },
        { date: new Date("1970-01-01"), value: [50, 10, 20] },
        { date: new Date("1975-01-01"), value: [80, 70, 20] },
        { date: new Date("1980-01-01"), value: [10, 70, 20] },
        { date: new Date("1980-01-01"), value: [20, 60, 20] },
        { date: new Date("1990-01-01"), value: [80, 70, 20] },
        { date: new Date("2000-01-01"), value: [80, 70, 10] },
        { date: new Date("2010-01-01"), value: [80, 50, 20] },
        { date: new Date("2020-01-01"), value: [80, 70, 20] },
        { date: new Date("2024-01-01"), value: [80, 70, 20] },
    ];
    return representatives.filter(x => x.date <= date).sort((x, y) => y.date - x.date)[0].value;
}

function getPresidentByDate(date) {
    const presidents = [{ name: '이승만', value: new Date("1948-7-24") },
    { name: '윤보선', value: new Date("1960-8-12") },
    { name: '박정희', value: new Date("1963-12-17") },
    { name: '최규하', value: new Date("1979-12-6") },
    { name: '전두환', value: new Date("1980-8-27") },
    { name: '노태우', value: new Date("1988-2-25") },
    { name: '김영삼', value: new Date("1993-2-25") },
    { name: '김대중', value: new Date("1998-2-25") },
    { name: '노무현', value: new Date("2003-2-25") },
    { name: '이명박', value: new Date("2008-2-25") },
    { name: '박근혜', value: new Date("2013-2-25") },
    { name: '문재인', value: new Date("2017-5-10") },
    { name: '윤석열', value: new Date("2022-5-10") }];
    return presidents.filter(x => x.value <= date).sort((x, y) => y.date - x.date)[0].name;
}

const chart = Highcharts.chart('Parliament_container', {

    chart: {
        type: 'item'
    },

    title: {
        text: 'INFORMATION'
    },

    legend: {
        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
    },

    series: [{
        name: 'Representatives',
        keys: ['name', 'y', 'color'],
        data: [
            ['', 0, '#e73921'],
            ['', 0, '#5e83ba'],
            ['', 0, '#ddd']
        ],
        dataLabels: {
            enabled: true,
            format: '{point.label}',
            style: {
                textOutline: '3px contrast'
            }
        },

        // Circular options
        center: ['50%', '88%'],
        size: '170%',
        startAngle: -100,
        endAngle: 100
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                series: [{
                    dataLabels: {
                        distance: -30
                    }
                }]
            }
        }]
    }
});

const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const carousel = document.querySelector('#carousel');

let index = 0;

prevButton.addEventListener('click', () => {
    if (index === 0) return;
    index -= 1;
    updateChart(index);
});

nextButton.addEventListener('click', () => {
    if (index === document.querySelectorAll('#carousel img').length - 1) return;
    index += 1;
    updateChart(index);
});

function updateChart(idx) {
    index = parseInt(idx);
    window.location.hash = '#' + index;
    highlight();
    transition();
    updatePoll(idx);
    loadData(getRepresentativesByDate(datas[index].date));
}

function highlight() {
    const thumbnails = document.querySelectorAll('#carousel img');
    thumbnails.forEach((thumbnail, i) => {
        if (i == index) {
            thumbnail.classList.add('thumbnail-highlight');
            thumbnail.classList.remove('thumbnail-dim');
            updateSelectedThumbnail(i);
            updateDescription(i);
            updateVotes(i);
        } else {
            thumbnail.classList.remove('thumbnail-highlight');
            thumbnail.classList.add('thumbnail-dim');
        }
    });
}

function updatePoll(idx) {
    const voteData = getVoteDataByDate(datas[idx].date);
    drawChart(voteData[2], false);
}

function transition() {
    const carousel = document.querySelector('#carousel');
    const selectedThumbnail = document.querySelector(`#thumbnails > div > div > img:nth-child(${index + 1})`);
    const selectedThumbnailOffset = selectedThumbnail.offsetLeft;
    const selectedThumbnailWidth = selectedThumbnail.offsetWidth;
    const containerWidth = carousel.offsetWidth;

    let translateX = -(selectedThumbnailOffset - (containerWidth - selectedThumbnailWidth) / 2);
    carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;

    // 선택된 이미지 강조를 위해 선택된 이미지의 클래스 변경
}

function loadData(Representatives) {
    var data = chart.series[0].data;
    data[0].update({
        y: Representatives[0],
    });
    data[1].update({
        y: Representatives[1],
    });
    data[2].update({
        y: Representatives[2],
    });
}

function updateSelectedThumbnail(idx) {
    const thumbnails = document.querySelectorAll('#carousel img');
    var selectedThumbnailDiv = document.getElementById('selectedThumbnail');
    var selectedThumbnailSrc = thumbnails[idx].src;
    selectedThumbnailDiv.innerHTML = '<img src="' + selectedThumbnailSrc + '" alt="Selected Thumbnail">';
}

function updateDescription(idx) {
    var descriptionDiv = document.getElementById('description');
    descriptionDiv.innerHTML = datas[idx].description;
}

function updateVotes(idx) {
    const voteData = getVoteDataByDate(datas[idx].date);
    var rateDiv = document.getElementById('percentage');
    rateDiv.innerHTML = `VOTE PERCENTAGE ${voteData[0]}%`;
    var countDiv = document.getElementById('count');
    countDiv.innerHTML = `VOTE COUNT ${voteData[1]}`;
}

window.onload =
    function () {
        setImages();
        index = window.location.hash.replace('#', '') || 0;
        setTimeout(() => {
            updateChart(index);
        }, 20);
    };

function setImages() {
    const thumbnailInner = document.getElementById("carousel");
    datas.forEach((data, index) => {
        const item = document.createElement("img");
        item.src = `${data.image}`;
        item.setAttribute('onclick', `updateChart(${index})`);
        thumbnailInner.appendChild(item);
    });
}