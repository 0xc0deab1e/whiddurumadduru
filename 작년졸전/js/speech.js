$(document).ready(function () {
  const urlParams = new URL(location.href).searchParams;
  const name = urlParams.get("target");
  var data = detailPd[name];

  setSpeech(data, name);
});

function setSpeech(data, name) {
  var array = [];
  $.each(speechData, function (i, d) {
    if (d.president == name) {
      array[i] = d;
    }
  });

  var calHtml = "";
  var a = 0.5;
  for (
    var i = presidentRange[name]["startY"];
    i < presidentRange[name]["endY"] + 1;
    i++
  ) {
    a = a + 0.1;

    calHtml += `<div class="ls ls-${i}">${i}</div>
    <div class="rs rs-${i}" ></div>`;
  }
  $(".cal-v2").html(calHtml);

  $.each(array, function (i, d) {
    if (d) {
      var target = d.date;
      var ty = target.split(".")[0];
      var targetText = d.text;

      var textHtml = `<div class="box" index=${d.index}>${d.title}</div>`;
      $(`.rs-${ty}`).append(textHtml);
    }
  });
  for (
    var i = presidentRange[name]["startY"];
    i < presidentRange[name]["endY"] + 1;
    i++
  ) {
    a = a + 0.1;

    var htmls = $(`.rs-${i}`).html();

    if (htmls == "") {
      $(`.rs-${i}`).css("display", "none");
      $(`.ls-${i}`).css("display", "none");
    }
  }

  $(`.rs .box`).on("click", function () {
    var target = $(this).attr("index");

    var speechToFind = array.find(function (speech) {
      if (speech) {
        return speech.index === target;
      }
    });

    $(".sub-tooltip .title").html(speechToFind.title);
    $(".sub-tooltip .type1").html(speechToFind.type1);
    $(".sub-tooltip .type2").html(speechToFind.type2);
    $(".sub-tooltip .text").html(speechToFind.text);
    $(".sub-tooltip").fadeIn();
  });
  $(".sub-tooltip .close").on("click", function () {
    $(".sub-tooltip").fadeOut();
  });
}

var speechSample = [
  {
    index: "3484",
    president: "노무현",
    type1: "연설문",
    type2: "취임사",
    date: "2003.02.25",
    title: "제16 대 대통령 취임 경축연 연설",
    adress_loc: "국내",
    adress_source: "노무현대통령연설문집 제1권 2월",
    link: "https://www.pa.go.kr/research/contents/speech/index.jsp?spMode=view&catid=c_pa02062&artid=1309348",
    original_link:
      "https://dams.pa.go.kr/dams/DOCUMENT/2009/11/26/DOC/SRC/0104200911264264500042645014612.PDF",
    text: "주한외교사절 여러분, 그리고 멀리서 오신 외빈 여러분,</br></br>전두환 전 대통령과 3부요인을 비롯한 내빈 여러분!</br></br>저의 대통령 취임을 축하해 주기 위해 이 자리에 참석하신 여러분께 다시 한번 감사를 드립니다. </br></br>이제 막 대통령의 책무를 부여받은 저는 기쁨보다는 무거운 책임감을 느낍니다. 참으로 어깨가 무겁습니다. 그러나 이 자리까지 저를 이끌어주신 국민 여러분을 믿고 이 벅찬 소명을 감당해 가고자 합니다. 신명을 다 바쳐 국민 여러분의 기대에 부응해 나가겠습니다. </br></br>존경하는 내외귀빈 여러분!</br></br>지금 우리는 선택의 기로에 서 있습니다. 도약과 후퇴의 중대한 갈림길입니다. 우리 국민은 숱한 도전을 슬기롭게 극복하면서 여기까지 왔습니다. 끊임없는 외침을 극복하며 민족의 자존을 지켜왔습니다. 식민통치와 전쟁의 폐허를 딛고일어서 우리 경제를 세계 열두번째 대열에 올려놓았습니다. 분단이라는 악조건을 이겨내면서 성숙한 민주주의를 이루어 왔습니다. 참으로 자랑스런 우리 국민이 아닐 수 없습니다. 오늘의 우리를 있게 한 선열과 우리 국민께 무한한 존경과 감사를 드립니다. </br></br>그러나 아직 우리가 가야할 길에는 불안과 희망이 교차하고 있습니다. 세계경쟁이 갈수록 치열해지고 있습니다. 중국이 무서운 속도로 우리를 추격해오고 있습니다. 이라크 사태 등으로 세계경제는 어려움이 더해지고 있습니다. 그러나 위기는 우리에게 또 다른 기회이기도 합니다. 이 어려움을 극복하고 다시 한번 도약해서 선진국으로 진입할 것인가 아니면 뒤떨어질 것인가, 우리하기에 달려 있습니다. </br></br>무엇보다 경제의 경쟁력을 높여야 합니다. 투명하고 공정한 경제시스템을 만들어야 합니다. </br></br>IMF 경제위기 이후 지난 5년간 많은 노력이 있었습니다. 그러나 아직도 개선해야 할 점이 많습니다. 시장과 기업, 행정규제, 노사관계 등에서 지속적인 개혁을 통해 글로벌 스탠더드를 이루어내야 합니다. 이것만이 무한경쟁에서 살아남고 선진국으로 도약할 수 있는 길입니다. 기술혁신도 더욱 강력하게 이루어져야 합니다.</br></br>정치, 행정 등 우리 사회 각 부문의 문화도 질적으로 한 단계 더 도약해야 합니다. 원칙이 통용되지 않고 구성원간의 신뢰가 없는 사회, 대화와 타협으로 문제를 해결하는 데 익숙하지 않은 사회는 결코 선진 사회가 아닙니다. </br></br>중앙과 지방이 조화와 균형을 이루며 발전해야 합니다. 지방은 자신의 미래를 자율적으로 설계하고 중앙은 이를 도와야 할 것입니다. 진정한 경쟁력의 원천은 무엇보다 원칙과 기본을 바로 세우는 데 있습니다. </br></br>내외귀빈 여러분!</br></br>북한 핵 문제도 시급히 해결해야 할 과제입니다. 어떠한 어려움이 있더라도 이 문제는 평화적으로 해결해야 합니다. 대화가 유일한 해법입니다. 저는 미국,일본과의 공조, 국제사회의 협력, 그리고 북한과의 대화를 통해 이를 평화적으로 해결해 나갈 것입니다. 평화를 지키는일이 대통령인 저에게 주어진 제1의 임무라는 것을 깊이 인식하고 있습니다. </br></br>남북관계의 진전도 멈출 수 없습니다. 힘들고 어렵지만 우리는 이 길을 가야 합니다. 그래야 우리의 다음 세대들이 전쟁의 공포에서 벗어나 통일을 바라보며 살 수 있습니다. '동북아시대의 중심국가'로 도약하기 위해서도 남북간의 화해와 협력은 반드시 필요합니다. 저는 국민 여러분과 정치권의 동의를 구하면서 남북관계를 한발 한발 진전시켜 나가겠습니다. </br></br>위기를 기회로 만드는 힘은 바로 국민통합에서 나옵니다. 다같이 힘을 모읍시다. 우리 함께 갑시다. </br></br>여기 계신 여러분의 건승과 국민의 행복, 그리고 대한민국의 무궁한 발전을 위해서 건배를 제의하고자 합니다. </br></br>감사합니다. </br></br></br>",
  },
];
