var overFlow = true;
var isTooltip = false;

$(document).ready(function () {
  $(window).scrollTop(0);
  makeMainGraph();

  $(window).scroll(function () {
    var scrollT = $(this).scrollLeft();
    console.log(scrollT);

    if (scrollT > 80 && overFlow) {
      graphTransform();
      overFlow = false;
    } else if (scrollT < 80 && !overFlow) {
      makeMainGraph();
      overFlow = true;
      $(".main-graph-container .bar").on("click", function () {
        var target = $(this).attr("target");
        makeBarTooltip(target);
        isTooltip = true;
      });
    }
  });

  $(".main-graph-container .bar").on("click", function () {
    var target = $(this).attr("target");
    makeBarTooltip(target);
  });
  // $(".main-graph-container .bar").on("mouseout", function () {
  //   $(".main-tooltip").fadeOut();
  // });
});

function makeBarTooltip(target) {
  $(".main-tooltip").fadeIn();
  $.each(pd, function (i, d) {
    if (d.name == target) {
      console.log(d);
      $(".main-tooltip .p-name").html(d.name);
      $(".main-tooltip .p-party").html(d.party);
      $(".main-tooltip .p-party").css("background-color", d.정당색);
      $(".main-tooltip .footer").html(d.range);
      $(".main-tooltip .body").html(d.text);
      $(".main-tooltip .a-tag").attr(
        "href",
        "president_detail_m.html?target=" + d.name
      );
      $(".main-tooltip").css(
        "background-image",
        "url('img/main/" + d.img + "')"
      );
    }
  });
  $(".main-tooltip .close").on("click", function () {
    $(".main-tooltip").fadeOut();
  });
}
function graphTransform() {
  var g = $(".graph-item");

  var addTick = 168;
  $.each(g, function (i, d) {
    $(d).css("left", addTick);
    addTick += pd[i]["year"] * tick;
  });

  var tickHtml = "";
  $(".dotted-line").css("display", "none");
  $(".date").css("display", "none");
  for (var i = 0; i < 17; i++) {
    tickHtml += `<div class="dotted-line" style="left:${205 + 100 * i}"></div>`;
    tickHtml += `<div class="date" style="left:${205 + 100 * i}">${
      i * 5 + 1948
    }년</div>`;
  }
  $(".main-graph-container").append(tickHtml);
}
function makeMainGraph() {
  var mainGraph = "";
  $.each(pd, function (i, d) {
    mainGraph += `<div class="graph-item ${d.name}">
      <div class="name">${d.name}</div>
      <div class="bar" target="${d.name}" style="width:${
      d.year * tick
    }px"></div>
      </div>
      `;
  });

  var tickHtml = "";
  for (var i = 0; i < 4; i++) {
    tickHtml += `<div class="dotted-line" style="left:${205 + 100 * i}"></div>`;
    tickHtml += `<div class="date" style="left:${205 + 100 * i}">${
      (i + 1) * 5
    }년</div>`;
  }

  $(".main-graph-container").html(mainGraph);
  $(".main-graph-container").append(tickHtml);
}
