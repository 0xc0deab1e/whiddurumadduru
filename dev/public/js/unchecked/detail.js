$(document).ready(function () {
  const urlParams = new URL(location.href).searchParams;

  const name = urlParams.get("target");

  var data = detailPd[name];
  $(".main-title .title.subb").html(`${name} 대통령`);
  console.log("?/??");
  setDetail(data, name);
  console.log("?/??");
  setBarchart(data, name);
  // setEvent(data, name);
  setSpeech(data, name);
  $.each(pd, function (i, d) {
    console.log(d);
    if (d.name == name) {
      console.log(pd);
      $(".detail-container .right-side .item-container .title .cls-1").css(
        "fill",
        d.정당색
      );
    }
  });

  $(window).scroll(function () {
    console.log(
      "??",
      $(".slider-img-container").offset().top,
      $(document).scrollTop()
    );
    var a = $(".slider-img-container").offset().top;
    var b = $(document).scrollTop();
    if (b > a) {
      $(".main-title .title.bold").html("여론조사 추이");
      var c = "";
      $.each(pd, function (i, d) {
        if (name == d.name) {
          $(".main-title .title.subb").html(d.onlyRange);
        }
      });

      $(".main-title .title.subb").addClass("active");
    } else {
      $(".main-title .title.bold").html("대한민국 역대 대통령");
      $(".main-title .title.subb").html(`${name} 대통령`);
      $(".main-title .title.subb").removeClass("active");
    }
  });
  $(".tograph").on("click", function () {
    $("html, body").animate({ scrollTop: $(".slider").offset().top }, 1000);
    $(".toissue").removeClass("active");
    $(this).addClass("active");
  });
  $(".toissue").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    $(".tograph").removeClass("active");
    $(this).addClass("active");
  });
});

function searchParam(key) {
  return new URLSearchParams(location.search).get(key);
}

function setDetail(targetData, name) {
  console.log("?/??");
  var leftHtml = "";
  var rightHtml = "";

  var colorVal = "";
  $.each(targetData, function (i, d) {
    if (i == 0) {
      $.each(pd, function (j, e) {
        if (e.name == name) {
          console.log(e);
          leftHtml += `<div class="person-info">${e.onlyRange}</div>`;
          leftHtml += `<div class="person-info-box"><b>${e.party}</b>
          <br>
          ${e.boxText} <span class="p-name"> ${name}</span>
          </div>`;
          colorVal = e.정당색;
        }
      });
    }
    leftHtml += `<div class="img-container" year="${d.year}"
    style="background-image:url('img/detail/${name}/${d.img}');">`;
    leftHtml += `<div class="info-container-sub">${d.info}</div>`;
    leftHtml += `<div class="info-container"><div class="party-color" style="background-color:${colorVal}"></div>${d.top}</div>`;
    if (d.percent) {
      leftHtml += `<div class="counters">
      <div class="counter" akhi="${parseFloat(d.percent)}
      "></div><span>%</span></div>`;
    }
    if (d.movie) {
      leftHtml += `<div class="movie-container">
      <video height="300" width="450"autoplay controls>
        <source src="img/detail/${name}/${d.movie}" type="video/mp4">
        이 문장은 여러분의 브라우저가 video 태그를 지원하지 않을 때 화면에 표시됩니다!
      </video>
      </div>`;
    }
    leftHtml += `</div>`;
  });

  $.each(targetData, function (i, d) {
    rightHtml += `<div class="item-container">`;

    rightHtml += `<div class="speech">${d.year}</div>`;

    rightHtml += `<div class="title">
    <?xml version="1.0" encoding="UTF-8"?><svg id="_레이어_1" class="dots"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.68 18.52"><defs></defs><path class="cls-1" d="m11.1,6.46c1.06-1.19,2.11-2.39,3.18-3.57.51-.57,1.01-.92,1.7-.13.58.66.17,1.07-.24,1.5-1.13,1.2-2.28,2.39-3.83,4.01,2.18,0,3.74,0,5.3,0,.69,0,1.44-.11,1.47.97.02,1.07-.7,1.02-1.41,1.02-1.57,0-3.14,0-5.35,0,1.45,1.52,2.54,2.61,3.57,3.76.4.45,1.27.83.5,1.68-.9,1-1.45.12-1.9-.41-.97-1.13-1.82-2.36-2.72-3.55l-1.01.6c0,1.62-.01,3.25,0,4.87,0,.78-.11,1.38-1.12,1.31-.85-.06-.88-.62-.89-1.24,0-1.59,0-3.18,0-5.4-1.51,1.39-2.7,2.49-3.89,3.58-.5.46-.93,1.07-1.73.32-.81-.76-.26-1.23.26-1.68,1.2-1.04,2.44-2.02,3.66-3.03-.14-.27-.29-.54-.43-.82-1.64,0-3.28-.01-4.92,0-.81,0-1.37-.16-1.29-1.14.07-.85.66-.85,1.27-.85,1.59,0,3.19,0,5.48,0-1.5-1.52-2.65-2.66-3.78-3.82-.47-.48-1.1-.89-.36-1.7.86-.95,1.39-.31,1.93.27,1.07,1.14,2.1,2.3,3.78,3.1,0-1.45-.04-2.89.02-4.34.03-.7-.37-1.71.94-1.77,1.33-.06,1.03.93,1.05,1.66.03,1.46.01,2.92.01,4.38.25.14.5.27.75.41Z"/></svg>
    <div style="text-align:left;line-height:1.4em;">${d.title}</div></div>`;
    rightHtml += `<div class="text ${d.type}"><img src="img/quote.png" class="quote-img">${d.text}</div></div>`;
  });

  $(".left-side").html(leftHtml);
  $(".right-side").html(rightHtml);
  var d = $(".right-side .item-container");
  var e = $(".left-side .img-container");

  $.each(d, function (i, data) {
    var h = $(data).height();
    var target = e[i];
    $(target).css("height", h + 100 + "px");
  });
  counterEffect();
}

function counterEffect() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 10); // 카운트 속도
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
}

function setEvent(data, name) {
  var sdt = new Date(presidentRange[name]["start"]);
  var edt = new Date(presidentRange[name]["end"]);
  var dateDiff = Math.ceil(
    (edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24)
  );

  var dateSliderHtml = "";
  for (var i = 1; i < dateDiff / 10; i++) {
    dateSliderHtml += `<div class='slider-item' range="${i}></div>`;
  }

  $(".slider-item-container").html(dateSliderHtml);

  $("#range").attr("max", dateDiff + 1);
  $("#range").attr("min", 1);

  const range = document.getElementById("range"),
    rangeV = document.getElementById("rangeV"),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 10 - newValue * 0.2;
      rangeV.innerHTML = `<span>${range.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener("input", setValue);
}

function setBarchart(data, name) {
  var seriesData = [];

  $.each(presidentRange[name]["data"], function (i, d) {
    if (d.year) {
      seriesData[i] = {
        x: new Date(d.year).getTime(),
        y: 1,
        img: d.img,
        movie: d.movie,
        title: d.title,
        date: d.year,
      };
    }
  });
  console.log(seriesData);
  Highcharts.chart("container", {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      zoomType: "x",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            fillColor: "white",
            lineColor: "green",
            lineWidth: 0,
          },
        },
        point: {
          events: {
            mouseOver: function () {
              const chart = this.series.chart;
              $(".event-date-text").html(this.date);
              $(".event-title").html(this.title);

              $(window).mousemove(function (e) {
                var a = e.pageX - 100;
                console.log(a);
                $(".event-date-text").css("display", "inline-block");
                $(".event-date").css("left", a);
                $(".event-title").css("left", a);
                if (a > $(window).width() - 300) {
                  $(".event-date").css("left", a - 300);
                  $(".event-title").css("left", a - 300);
                  $(".event-date").css("text-align", "right");
                  $(".event-title").css("text-align", "right");
                } else {
                  $(".event-date").css("text-align", "left");
                  $(".event-title").css("text-align", "left");
                }
              });

              if (this.img) {
                $(".event-img").css(
                  "background-image",
                  `url("../img/detail/${name}/${this.img}")`
                );
                $(".event-img").css("display", "block");
                $(".event-video").css("display", "none");
              }
              if (this.movie) {
                $(".event-video").html(`
                <video height="420" width="770" autoplay controls>
                  <source src="img/detail/${name}/${this.movie}" type="video/mp4" />
                </video>`);
                $(".event-video").css("display", "block");
                $(".event-img").css("display", "none");
              }
            },
          },
        },
        events: {
          mouseOut: function () {},
        },
      },
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      min: 0,
      max: 1,
      gridLineWidth: 0,
    },
    xAxis: {
      labels: {
        format: "{value:%b %e}",
        enabled: false,
      },
      gridLineWidth: 1,
      gridLineColor: "#666666",
      tickInterval: 604800000,
      type: "datetime",
      min: seriesData[0]["x"],
      tickPositioner: function () {
        this.tickPositions[0] = 1569888000000; // 2019-10-01T00.00.00.000Z
        return this.tickPositions;
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        data: seriesData,
        color: "#FFFFFF",
        states: {
          hover: {
            color: "#00ffd0",
            borderColor: "#00ffd0",
            borderWidth: 2,
          },
        },
      },
    ],
    navigator: {
      enabled: true,
    },
  });
}
function setSpeech(data, name) {
  var array = [];
  $.each(speechData, function (i, d) {
    if (d.president == name) {
      array[i] = d;
    }
  });
}
