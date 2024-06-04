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

const prevButton = document.querySelector('#carousel-control-prev');
const nextButton = document.querySelector('#carousel-control-next');
const carousel = document.querySelector('#carousel');

let index = 0;

prevButton?.addEventListener('click', () => {
    if (index === 0) return;
    index -= 1;
    updateChart(index);
});

nextButton?.addEventListener('click', () => {
    if (index === thumbnailData.length - 1) return;
    index += 1;
    updateChart(index);
});

function updateChart(idx) {
    index = parseInt(idx);
    window.location.hash = '#' + index;
    highlight();
    updateSelectedThumbnail(idx);
    updateDescription(idx);
    transition();
    updatePoll(idx);
    loadData(getRepresentativesByDate(thumbnailData[index].date));
}

function highlight() {
    const thumbnails = document.querySelectorAll('#carousel img');
    thumbnails.forEach((thumbnail, i) => {
        if (i == index) {
            thumbnail.classList.add('thumbnail-highlight');
            thumbnail.classList.remove('thumbnail-dim');

            updateVotes(i);
        } else {
            thumbnail.classList.remove('thumbnail-highlight');
            thumbnail.classList.add('thumbnail-dim');
        }
    });
}

function updatePoll(idx) {
    drawChart(window.innerWidth < 768 ? thumbnailData[idx].date.getFullYear() : getVoteDataByDate(thumbnailData[idx].date)[2], false);
}

function transition() {
    const carousel = document.querySelector('#carousel');
    const selectedThumbnail = document.querySelector(`#thumbnails > div > div > img:nth-child(${index + 1})`);
    const selectedThumbnailOffset = selectedThumbnail?.offsetLeft;
    const selectedThumbnailWidth = selectedThumbnail?.offsetWidth;
    const containerWidth = carousel?.offsetWidth;

    let translateX = -(selectedThumbnailOffset - (containerWidth - selectedThumbnailWidth) / 2);
    if(carousel)
        carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;
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
    var selectedThumbnailDiv = document.getElementById('selectedThumbnail');
    var selectedThumbnailSrc = thumbnailData[idx].value;
    selectedThumbnailDiv.innerHTML = '<img src="' + selectedThumbnailSrc + '" alt="Selected Thumbnail">';
    const year = document.querySelector('#yearContainer');
    const date = thumbnailData[idx].date;
    if (year)
        year.innerHTML = `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;
}

function updateDescription(idx) {
    var descriptionDiv = document.getElementById('description');
    descriptionDiv.innerHTML = thumbnailData[idx].description;
}

function updateVotes(idx) {
    const voteData = getVoteDataByDate(thumbnailData[idx].date);
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

        const ul = document.querySelector('ul.next');
        ul.innerHTML += `<li><a href="/">Home</a></li>`;
    };

function setImages() {
    const thumbnailInner = document.getElementById("carousel");
    thumbnailData.sort((a, b) => { return a.x + a.y * 1000 - (b.x + b.y * 1000) }).forEach((data, index) => {
        const item = document.createElement("img");
        item.src = `${data.value}`;
        item.setAttribute('onclick', `updateChart(${index})`);
        thumbnailInner?.appendChild(item);
    });
}