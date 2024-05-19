const VoteData = [[91.80, '180'],
[74.60, '5,238,769'],
[70.00, '5,046,437'],
[79.10, '208'],
[46.60, '4,702,640'],
[51.40, '5,688,666'],
[53.20, '6,342,828'],
[99.90, '2,357'],
[99.80, '2,577'],
[96.30, '2,465'],
[99.40, '2,524'],
[90.10, '4,755'],
[36.60, '8,282,738'],
[42.00, '9,977,332'],
[40.30, '10,326,275'],
[48.90, '12,014,277'],
[48.70, '11,492,389'],
[51.60, '15,773,128'],
[41.10, '13,423,800'],
[48.60, '16,394,815']]

const datas = [
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [80, 70, 20],
        voteData: VoteData[0]
    },
    {
        image: '/img/xicon2.png',
        description: 'test',
        Representatives: [10, 70, 20],
        voteData: VoteData[1]
    },
    {
        image: '/img/xicon1.png',
        description: 'ttttttt',
        Representatives: [0, 0, 0],
        voteData: VoteData[1]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[2]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[3]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[4]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[5]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[6]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[7]
    },
    {
        image: '/img/xicon1.png',
        description: 'desc<b>ription</b>',
        Representatives: [0, 0, 0],
        voteData: VoteData[0]
    },
];

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
    loadData(datas[index].Representatives);
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

function transition() {
    const carousel = document.querySelector('#carousel');
    const selectedThumbnail = document.querySelector(`#thumbnails > div > div > img:nth-child(${index + 1})`);
    const selectedThumbnailOffset = selectedThumbnail.offsetLeft;
    const selectedThumbnailWidth = selectedThumbnail.offsetWidth;
    const containerWidth = carousel.offsetWidth;

    let translateX = -(selectedThumbnailOffset - (containerWidth - selectedThumbnailWidth) / 2);
    console.log(index, selectedThumbnailOffset, selectedThumbnailWidth, containerWidth, translateX);
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
    var rateDiv = document.getElementById('percentage');
    rateDiv.innerHTML = `VOTE PERCENTAGE ${datas[idx].voteData[0]}%`;
    var countDiv = document.getElementById('count');
    countDiv.innerHTML = `VOTE COUNT ${datas[idx].voteData[1]}`;
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