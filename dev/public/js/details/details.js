const chart = Highcharts.chart("Parliament_container", {
  chart: {
    type: "item",
  },

  exporting: {
    enabled: false, // 햄버거 바 비활성화
  },

  credits: {
    enabled: false,
  },

  title: {
    text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;의석수",
    align: "left",
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
  },

  series: [
    {
      name: "Representatives",
      keys: ["name", "y", "color"],
      data: [
      ],
      dataLabels: {
        enabled: true,
        format: "{point.label}",
        style: {
          textOutline: "3px contrast",
        },
      },

      center: ["50%", "88%"],
      size: "170%",
      startAngle: -100,
      endAngle: 100,
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 600,
        },
        chartOptions: {
          series: [
            {
              dataLabels: {
                distance: -30,
              },
            },
          ],
        },
      },
    ],
  },
});

const prevButton = document.querySelector("#carousel-control-prev");
const nextButton = document.querySelector("#carousel-control-next");
const carousel = document.querySelector("#carousel");

prevButton?.addEventListener("click", () => {
  if (!window.index) return;
  window.index -= 1;
  updateChart(window.index);
});
nextButton?.addEventListener("click", () => {
  console.log(window.index);
  if (window.index === thumbnailData.length - 1) return;
  window.index += 1;
  updateChart(window.index);
});

function updateChart(idx) {
  window.index = parseInt(idx);
  idx = Math.max(0, idx);
  if (window.index >= 0)
    window.location.hash = "#" + window.index;
  highlight();
  updateSelectedThumbnail(idx);
  updateDescription(idx);
  transition();
  updatePoll();
  loadData(getRepresentativesByDate(thumbnailData[idx].date));
}

function highlight() {
  const thumbnails = document.querySelectorAll("#carousel img");
  thumbnails.forEach((thumbnail, i) => {
    if (i == window.index) {
      thumbnail.classList.add("thumbnail-highlight");
      thumbnail.classList.remove("thumbnail-dim");

      updateVotes(i);
    } else {
      thumbnail.classList.remove("thumbnail-highlight");
      thumbnail.classList.add("thumbnail-dim");
    }
  });
}

function updatePoll() {
  if (window.index < 0)
    drawChart(null, window.isPositive);
  else
    drawChart(getVoteDataByDate(thumbnailData[window.index].date)[2], true);
}

function transition() {
  const carousel = document.querySelector("#carousel");

  let selectedThumbnail = document.querySelector(
    `#thumbnails > div > div > img:nth-child(${window.index + 1})`
  );
  setTimeout(() => {
    const selectedThumbnailOffset = selectedThumbnail?.offsetLeft;
    const selectedThumbnailWidth = selectedThumbnail?.offsetWidth;
    const containerWidth = carousel?.offsetWidth;
    
    let translateX = -(
      selectedThumbnailOffset -
      (containerWidth - selectedThumbnailWidth) / 2
    );
    if (carousel) carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;
  }, 500);
}

function loadData(Representatives) {
  var data = chart.series[0].data;
  Representatives.forEach((x, i) => {
    if (data.length <= i) {
      chart.series[0].addPoint({
        name: x[0],
        y: x[1],
        color: x[2],  
      });
    }
    else {
      data[i].update({
        name: x[0],
        y: x[1],
        color: x[2],  
      });
    }
  });
  const max = data.length;
  for (let i = Representatives.length; i <= max; i++) {
    data[data.length - 1].remove();
  }
}

function updateSelectedThumbnail(idx) {
  var selectedThumbnailDiv = document.getElementById("selectedThumbnail");
  var selectedThumbnailSrc = thumbnailData[idx].value;
  selectedThumbnailDiv.innerHTML =
    '<img src="' + selectedThumbnailSrc + '" alt="Selected Thumbnail" style="max-width: 100%;">';
  const year = document.querySelector("#yearContainer");
  const date = thumbnailData[idx].date;
  if (year)
    year.innerHTML = `${date.getFullYear()}/${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}

function updateDescription(idx) {
  var descriptionDiv = document.getElementById("description");
  descriptionDiv.innerHTML = thumbnailData[idx].description;
}

function updateVotes(idx) {
  const voteData = getVoteDataByDate(thumbnailData[idx].date);
  var rateDiv = document.getElementById("percentage");
  rateDiv.innerHTML = `${voteData[0]}%`;
  var countDiv = document.getElementById("count");
  countDiv.innerHTML = `${voteData[1]}`;
}

window.onload = function () {
  const red = thumbnailData.filter((x) => x.color === "#e73921").length;
  const blue = thumbnailData.filter((x) => x.color === "#5e83ba").length;
  const white = thumbnailData.filter((x) => x.color === "white").length;
  drawSummaryChart(red, blue, white);

  setImages();
  if (!(window.index < 0))
    window.index = window.location.hash.replace("#", "") || 0;
  setTimeout(() => {
    updateChart(window.index);
  }, 20);
};

function setImages() {
  const thumbnailInner = document.getElementById("carousel");
  thumbnailData
    .sort((a, b) => {
      return a.x + a.y * 1000 - (b.x + b.y * 1000);
    })
    .forEach((data, index) => {
      const item = document.createElement("img");
      item.src = `${data.value}`;
      item.setAttribute("onclick", `updateChart(${index})`);
      thumbnailInner?.appendChild(item);
    });
}
