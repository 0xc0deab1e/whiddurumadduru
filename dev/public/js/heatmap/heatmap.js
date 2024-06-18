window.isPositive = true;

function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iOS detection
  if (/iPhone|iPad|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return true;
  }

  // Other mobile user agents
  if (/Mobile|mini|Fennec|Windows Phone|webOS|Opera Mobi|IEMobile|BlackBerry/.test(userAgent)) {
    return true;
  }

  return false;
}

if (!isMobile()) {
  window.index = -1;
  document.querySelector("#imgBox").innerHTML = `
  <img class="tooltipImage" src="/img/comp/이승만 01 중간.jpeg" , color: "#e73921" , img_id="0">
  <img class="tooltipImage" src="/img/comp/이승만 당선 (1952) 중간.jpeg" , color: "#e73921" , img_id="1">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="2">
  <img class="tooltipImage" src="/img/comp/무쵸 미 특사와 회담 중간.jpeg" , color: "#e73921" , img_id="3">
  <img class="tooltipImage" src="/img/comp/경제원조 요청 중간.jpeg" , color: "#e73921" , img_id="4">
  <img class="tooltipImage" src="/img/comp/반민족행위처벌법 제정2 중간.jpeg" , color: "#e73921" , img_id="5">
  <img class="tooltipImage" src="/img/comp/반민족행위처벌법 시행 중간.jpeg" , color: "#e73921" , img_id="6">
  <img class="tooltipImage" src="/img/comp/여순사건 중간.jpeg" , color: "#e73921" , img_id="7">
  <img class="tooltipImage" src="/img/comp/계엄선포 공포 중간.jpeg" , color: "#e73921" , img_id="8">
  <img class="tooltipImage" src="/img/comp/내외신 기자회견 1948 중간.jpeg" , color: "#e73921" , img_id="9">
  <img class="tooltipImage" src="/img/comp/여순사건3 중간.jpeg" , color: "#e73921" , img_id="10">
  <img class="tooltipImage" src="/img/comp/국가보안법2 중간.jpeg" , color: "#e73921" , img_id="11">
  <img class="tooltipImage" src="/img/comp/이승만 토지개혁 중간.jpeg" , color: "#e73921" , img_id="12">
  <img class="tooltipImage" src="/img/comp/반민족행위특별조사위원회 중간.jpeg" , color: "#e73921" , img_id="13">
  <img class="tooltipImage" src="/img/comp/조병옥, 장기영, 이춘호 중간.jpeg" , color: "#e73921" , img_id="14">
  <img class="tooltipImage" src="/img/comp/이승만, 김활란 중간.jpeg" , color: "#e73921" , img_id="15">
  <img class="tooltipImage" src="/img/comp/식량배급지시 중간.jpeg" , color: "#e73921" , img_id="16">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="17">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="18">
  <img class="tooltipImage" src="/img/comp/학도호국단결성 중간.jpeg" , color: "#e73921" , img_id="19">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="20">
  <img class="tooltipImage" src="/img/comp/5.10 총선 중간.jpeg" , color: "#e73921" , img_id="21">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="22">
  <img class="tooltipImage" src="/img/comp/농지개혁 중간.jpeg" , color: "#e73921" , img_id="23">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="24">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="25">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="26">
  <img class="tooltipImage" src="/img/comp/병역법 공포 중간.jpeg" , color: "#e73921" , img_id="27">
  <img class="tooltipImage" src="/img/comp/이승만과 장제스 중간.jpeg" , color: "#e73921" , img_id="28">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="29">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="30">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="31">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="32">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="33">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="34">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="35">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="36">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="37">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="38">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="39">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="40">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="41">
  <img class="tooltipImage" src="/img/comp/비상계엄령 선포 중간.jpeg" , color: "#e73921" , img_id="42">
  <img class="tooltipImage" src="/img/comp/대통령 긴급명령 제5호 계엄 중간.jpeg" , color: "#e73921" , img_id="43">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="44">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="45">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="46">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="47">
  <img class="tooltipImage" src="/img/comp/서울입성 특별성명 중간.jpeg" , color: "#e73921" , img_id="48">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="49">
  <img class="tooltipImage" src="/img/comp/평양탈환 중간.jpeg" , color: "#e73921" , img_id="50">
  <img class="tooltipImage" src="/img/comp/피납치자구출관련지시 중간.jpeg" , color: "#e73921" , img_id="51">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="52">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="53">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="54">
  <img class="tooltipImage" src="/img/comp/평양시민환영대회 참석 연설 중간.jpeg" , color: "#e73921" , img_id="55">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="56">
  <img class="tooltipImage" src="/img/comp/남북통일담화 중간.jpeg" , color: "#e73921" , img_id="57">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="58">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="59">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="60">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="61">
  <img class="tooltipImage" src="/img/comp/국무총리 귀국보고 중간.jpeg" , color: "#e73921" , img_id="62">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="63">
  <img class="tooltipImage" src="/img/comp/방위사관학교 졸업식 훈시 중간.jpeg" , color: "#e73921" , img_id="64">
  <img class="tooltipImage" src="/img/comp/지방공무원회의 참석 중간.jpeg" , color: "#e73921" , img_id="65">
  <img class="tooltipImage" src="/img/comp/신임 주미대사 임명장 수여 중간.jpeg" , color: "#e73921" , img_id="66">
  <img class="tooltipImage" src="/img/comp/여성 폐풍 교정 지시 중간.jpeg" , color: "#e73921" , img_id="67">
  <img class="tooltipImage" src="/img/comp/김성수 신임 부통령 접견 중간.jpeg" , color: "#e73921" , img_id="68">
  <img class="tooltipImage" src="/img/comp/거제도 피난민 시찰 중간.jpeg" , color: "#e73921" , img_id="69">
  <img class="tooltipImage" src="/img/comp/선거공사 기공식 중간.jpeg" , color: "#e73921" , img_id="70">
  <img class="tooltipImage" src="/img/comp/미국 병원선 하벤 호 시찰 중간.jpeg" , color: "#e73921" , img_id="71">
  <img class="tooltipImage" src="/img/comp/신임 주일대표 임명장 수여 중간.jpeg" , color: "#e73921" , img_id="72">
  <img class="tooltipImage" src="/img/comp/노르웨이 병원선 관계자 접견 중간.jpeg" , color: "#e73921" , img_id="73">
  <img class="tooltipImage" src="/img/comp/정전반대 국토통일국민총궐기대회 중간.jpeg" , color: "#e73921" , img_id="74">
  <img class="tooltipImage" src="/img/comp/미 태평양함대 펠릭스 스텀프(Felix B. Stump) 제독 접견 중간.jpeg" , color: "#e73921" ,
    img_id="75">
  <img class="tooltipImage" src="/img/comp/미국 육군차관 접견 중간.jpeg" , color: "#e73921" , img_id="76">
  <img class="tooltipImage" src="/img/comp/용산구 수도사단 창설 기념식 중간.jpeg" , color: "#e73921" , img_id="77">
  <img class="tooltipImage" src="/img/comp/뉴욕지사접견 중간.jpeg" , color: "#e73921" , img_id="78">
  <img class="tooltipImage" src="/img/comp/신당조직담화 중간.jpeg" , color: "#e73921" , img_id="79">
  <img class="tooltipImage" src="/img/comp/아이젠하워 선물 중간.jpeg" , color: "#e73921" , img_id="80">
  <img class="tooltipImage" src="/img/comp/원조자금 사용관련 지시 중간.jpeg" , color: "#e73921" , img_id="81">
  <img class="tooltipImage" src="/img/comp/전시생활개선법공포 중간.jpeg" , color: "#e73921" , img_id="82">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="83">
  <img class="tooltipImage" src="/img/comp/자유당의원들과담화 중간.jpeg" , color: "#e73921" , img_id="84">
  <img class="tooltipImage" src="/img/comp/평화선 중간.jpeg" , color: "#e73921" , img_id="85">
  <img class="tooltipImage" src="/img/comp/원조물자 중간.jpeg" , color: "#e73921" , img_id="86">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="87">
  <img class="tooltipImage" src="/img/comp/부산국제시장 중간.jpeg" , color: "#e73921" , img_id="88">
  <img class="tooltipImage" src="/img/comp/북진통일민족대회 개최 중간.jpeg" , color: "#e73921" , img_id="89">
  <img class="tooltipImage" src="/img/comp/경제특별사절단장 접견 중간.jpeg" , color: "#e73921" , img_id="90">
  <img class="tooltipImage" src="/img/comp/노동관계법 제정 중간.jpeg" , color: "#e73921" , img_id="91">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="92">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="93">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="94">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="95">
  <img class="tooltipImage" src="/img/comp/625 사변 중간.jpeg" , color: "#e73921" , img_id="96">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="97">
  <img class="tooltipImage" src="/img/comp/재건계획 중간.jpeg" , color: "#e73921" , img_id="98">
  <img class="tooltipImage" src="/img/comp/이승만 대통령 재취임 경축식 중간.jpeg" , color: "#e73921" , img_id="99">
  <img class="tooltipImage" src="/img/comp/전쟁참여 유가족 중간.jpeg" , color: "#e73921" , img_id="100">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="101">
  <img class="tooltipImage" src="/img/comp/전국경찰총장 중간.jpeg" , color: "#e73921" , img_id="102">
  <img class="tooltipImage" src="/img/comp/비상계엄 중간.jpeg" , color: "#e73921" , img_id="103">
  <img class="tooltipImage" src="/img/comp/김병로 접견 중간.jpeg" , color: "#e73921" , img_id="104">
  <img class="tooltipImage" src="/img/comp/정기기자회견 중간.jpeg" , color: "#e73921" , img_id="105">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="106">
  <img class="tooltipImage" src="/img/comp/정전협정 기자회견 중간.jpeg" , color: "#e73921" , img_id="107">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="108">
  <img class="tooltipImage" src="/img/comp/서독의료단일행접견 중간.jpeg" , color: "#e73921" , img_id="109">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="110">
  <img class="tooltipImage" src="/img/comp/민의원 중간.jpeg" , color: "#e73921" , img_id="111">
  <img class="tooltipImage" src="/img/comp/아세아민족반공 중간.jpeg" , color: "#e73921" , img_id="112">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="113">
  <img class="tooltipImage" src="/img/comp/아이젠 중간.jpeg" , color: "#e73921" , img_id="114">
  <img class="tooltipImage" src="/img/comp/미국의회연설 중간.jpeg" , color: "#e73921" , img_id="115">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="116">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="117">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="118">
  <img class="tooltipImage" src="/img/comp/국정교과서 중간.jpeg" , color: "#e73921" , img_id="119">
  <img class="tooltipImage" src="/img/comp/주한미군 철수문제 특별성명 중간.jpeg" , color: "#e73921" , img_id="120">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="121">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="122">
  <img class="tooltipImage" src="/img/comp/육군제5군단 중간.jpeg" , color: "#e73921" , img_id="123">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="124">
  <img class="tooltipImage" src="/img/comp/민간주택 중간.jpeg" , color: "#e73921" , img_id="125">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="126">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="127">
  <img class="tooltipImage" src="/img/comp/미국무부극동담당차관보접견 중간.jpeg" , color: "#e73921" , img_id="128">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="129">
  <img class="tooltipImage" src="/img/comp/서울시의원 중간.jpeg" , color: "#e73921" , img_id="130">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="131">
  <img class="tooltipImage" src="/img/comp/서울상공회의소 중간.jpeg" , color: "#e73921" , img_id="132">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="133">
  <img class="tooltipImage" src="/img/comp/KBS 낙성식 참석 중간.jpeg" , color: "#e73921" , img_id="134">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="135">
  <img class="tooltipImage" src="/img/comp/동계빙상경기대회 개막식 중간.jpeg" , color: "#e73921" , img_id="136">
  <img class="tooltipImage" src="/img/comp/민법공포서명 중간.jpeg" , color: "#e73921" , img_id="137">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="138">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="139">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="140">
  <img class="tooltipImage" src="/img/comp/중앙선관위접견 중간.jpeg" , color: "#e73921" , img_id="141">
  <img class="tooltipImage" src="/img/comp/삼풍제지 중간.jpeg" , color: "#e73921" , img_id="142">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="143">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="144">
  <img class="tooltipImage" src="/img/comp/4선출마선언 중간.jpeg" , color: "#e73921" , img_id="145">
  <img class="tooltipImage" src="/img/comp/한미합동 기동상륙작전 중간.jpeg" , color: "#e73921" , img_id="146">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="147">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="148">
  <img class="tooltipImage" src="/img/comp/서울김천간 중간.jpeg" , color: "#e73921" , img_id="149">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="150">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="151">
  <img class="tooltipImage" src="/img/comp/김포공항 중간.jpeg" , color: "#e73921" , img_id="152">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="153">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="154">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="155">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="156">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="157">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="158">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="159">
  <img class="tooltipImage" src="/img/comp/4.19 부상환자 위문 중간.jpeg" , color: "#5e83ba" , img_id="160">
  <img class="tooltipImage" src="/img/comp/외교사절 접견 중간.jpeg" , color: "#5e83ba" , img_id="161">
  <img class="tooltipImage" src="/img/comp/유엔군총사령관접견 중간.jpeg" , color: "#5e83ba" , img_id="162">
  <img class="tooltipImage" src="/img/comp/서울시장 선거 중간.jpeg" , color: "#5e83ba" , img_id="163">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="164">
  <img class="tooltipImage" src="/img/comp/신년기자회견 중간.jpeg" , color: "#5e83ba" , img_id="165">
  <img class="tooltipImage" src="/img/comp/임시국회 중간.jpeg" , color: "#5e83ba" , img_id="166">
  <img class="tooltipImage" src="/img/comp/청조회 회원 접견 중간.jpeg" , color: "#5e83ba" , img_id="167">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="168">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="169">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="170">
  <img class="tooltipImage" src="/img/comp/미 태평양지구 지상군 사령관 접견 중간.jpeg" , color: "#5e83ba" , img_id="171">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="172">
  <img class="tooltipImage" src="/img/comp/로마교황청 중간.jpeg" , color: "#5e83ba" , img_id="173">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="174">
  <img class="tooltipImage" src="/img/comp/용공통일 중간.jpeg" , color: "#5e83ba" , img_id="175">
  <img class="tooltipImage" src="/img/comp/군사정전위 유엔측 대표 접견 중간.jpeg" , color: "#5e83ba" , img_id="176">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="177">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="178">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="179">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="180">
  <img class="tooltipImage" src="/img/comp/윤보선 대통령 하야성명서발표후기자회견장입장(1962)  중간.jpeg" , color: "#5e83ba" , img_id="181">
  <img class="tooltipImage" src="/img/comp/조속한 민간이양 촉구 중간.jpeg" , color: "#5e83ba" , img_id="182">
  <img class="tooltipImage" src="/img/comp/현충일 중간.jpeg" , color: "#5e83ba" , img_id="183">
  <img class="tooltipImage" src="/img/comp/유엔군총사령관 접견 중간.jpeg" , color: "#5e83ba" , img_id="184">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="185">
  <img class="tooltipImage" src="/img/comp/수재민구호 담화 중간.jpeg" , color: "#5e83ba" , img_id="186">
  <img class="tooltipImage" src="/img/comp/제헌절기념식 중간.jpeg" , color: "#5e83ba" , img_id="187">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="188">
  <img class="tooltipImage" src="/img/comp/박정희 중장에 계급장 수여 중간.jpeg" , color: "#5e83ba" , img_id="189">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="190">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="191">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="192">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="193">
  <img class="tooltipImage" src="/img/comp/중립국 중간.jpeg" , color: "#5e83ba" , img_id="194">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="195">
  <img class="tooltipImage" src="/img/comp/최후의혁명 중간.jpeg" , color: "#5e83ba" , img_id="196">
  <img class="tooltipImage" src="/img/comp/아시아반공연맹 중간.jpeg" , color: "#5e83ba" , img_id="197">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="198">
  <img class="tooltipImage" src="/img/comp/박정희 대통령 취임식(1971) 중간.jpeg" , color: "#e73921" , img_id="199">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="200">
  <img class="tooltipImage" src="/img/comp/첫국무회의 중간.jpeg" , color: "#e73921" , img_id="201">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="202">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="203">
  <img class="tooltipImage" src="/img/comp/관기(官紀) 쇄신 중간.jpeg" , color: "#e73921" , img_id="204">
  <img class="tooltipImage" src="/img/comp/연두교서 중간.jpeg" , color: "#e73921" , img_id="205">
  <img class="tooltipImage" src="/img/comp/5개년계획 중간.jpeg" , color: "#e73921" , img_id="206">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="207">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="208">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="209">
  <img class="tooltipImage" src="/img/comp/외무보고 중간.jpeg" , color: "#e73921" , img_id="210">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="211">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="212">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="213">
  <img class="tooltipImage" src="/img/comp/서울시내대학생 중간.jpeg" , color: "#e73921" , img_id="214">
  <img class="tooltipImage" src="/img/comp/경호실장 승진 발령 중간.jpeg" , color: "#e73921" , img_id="215">
  <img class="tooltipImage" src="/img/comp/비상계엄 중간.jpeg" , color: "#e73921" , img_id="216">
  <img class="tooltipImage" src="/img/comp/국회특별교서 중간.jpeg" , color: "#e73921" , img_id="217">
  <img class="tooltipImage" src="/img/comp/비상계엄령 해제 중간.jpeg" , color: "#e73921" , img_id="218">
  <img class="tooltipImage" src="/img/comp/공보부장관 임명 중간.jpeg" , color: "#e73921" , img_id="219">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="220">
  <img class="tooltipImage" src="/img/comp/벼베기 대회 중간.jpeg" , color: "#e73921" , img_id="221">
  <img class="tooltipImage" src="/img/comp/IOC 중간.jpeg" , color: "#e73921" , img_id="222">
  <img class="tooltipImage" src="/img/comp/멸공훈련 중간.jpeg" , color: "#e73921" , img_id="223">
  <img class="tooltipImage" src="/img/comp/재무부장관임명 중간.jpeg" , color: "#e73921" , img_id="224">
  <img class="tooltipImage" src="/img/comp/국회연두교서 중간.jpeg" , color: "#e73921" , img_id="225">
  <img class="tooltipImage" src="/img/comp/양화대교 중간.jpeg" , color: "#e73921" , img_id="226">
  <img class="tooltipImage" src="/img/comp/베트남파병 중간.jpeg" , color: "#e73921" , img_id="227">
  <img class="tooltipImage" src="/img/comp/춘천댐 준공식 중간.jpeg" , color: "#e73921" , img_id="228">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="229">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="230">
  <img class="tooltipImage" src="/img/comp/PATA총회 중간.jpeg" , color: "#e73921" , img_id="231">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="232">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="233">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="234">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="235">
  <img class="tooltipImage" src="/img/comp/일본의 대중문화 중간.jpeg" , color: "#e73921" , img_id="236">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="237">
  <img class="tooltipImage" src="/img/comp/섬진강 중간.jpeg" , color: "#e73921" , img_id="238">
  <img class="tooltipImage" src="/img/comp/시위관련 중간.jpeg" , color: "#e73921" , img_id="239">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="240">
  <img class="tooltipImage" src="/img/comp/서울춘천 중간.jpeg" , color: "#e73921" , img_id="241">
  <img class="tooltipImage" src="/img/comp/한일협정 중간.jpeg" , color: "#e73921" , img_id="242">
  <img class="tooltipImage" src="/img/comp/경북선 개통식 중간.jpeg" , color: "#e73921" , img_id="243">
  <img class="tooltipImage" src="/img/comp/KIST발족 중간.jpeg" , color: "#e73921" , img_id="244">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="245">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="246">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="247">
  <img class="tooltipImage" src="/img/comp/제2차 경제개발 중간.jpeg" , color: "#e73921" , img_id="248">
  <img class="tooltipImage" src="/img/comp/한일 경제각료회담대표접견 중간.jpeg" , color: "#e73921" , img_id="249">
  <img class="tooltipImage" src="/img/comp/한미행정협정 중간.jpeg" , color: "#e73921" , img_id="250">
  <img class="tooltipImage" src="/img/comp/한미공동성명 중간.jpeg" , color: "#e73921" , img_id="251">
  <img class="tooltipImage" src="/img/comp/아시아민족반공연맹대회(APACL) 개회식 치사 중간.jpeg" , color: "#e73921" , img_id="252">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="253">
  <img class="tooltipImage" src="/img/comp/각부장관임명 중간.jpeg" , color: "#e73921" , img_id="254">
  <img class="tooltipImage" src="/img/comp/과학교육 중간.jpeg" , color: "#e73921" , img_id="255">
  <img class="tooltipImage" src="/img/comp/외환은행 개업 중간.jpeg" , color: "#e73921" , img_id="256">
  <img class="tooltipImage" src="/img/comp/제6대대통령 중간.jpeg" , color: "#e73921" , img_id="257">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="258">
  <img class="tooltipImage" src="/img/comp/지원유세 중간.jpeg" , color: "#e73921" , img_id="259">
  <img class="tooltipImage" src="/img/comp/제 7대국회의원선거 중간.jpeg" , color: "#e73921" , img_id="260">
  <img class="tooltipImage" src="/img/comp/최규하임명 중간.jpeg" , color: "#e73921" , img_id="261">
  <img class="tooltipImage" src="/img/comp/올림픽선수 접견 중간.jpeg" , color: "#e73921" , img_id="262">
  <img class="tooltipImage" src="/img/comp/일본법무상접견 중간.jpeg" , color: "#e73921" , img_id="263">
  <img class="tooltipImage" src="/img/comp/연합철강 중간.jpeg" , color: "#e73921" , img_id="264">
  <img class="tooltipImage" src="/img/comp/고속도로 추진위원 임명장 수여 중간.jpeg" , color: "#e73921" , img_id="265">
  <img class="tooltipImage" src="/img/comp/세운상가 준공식 중간.jpeg" , color: "#e73921" , img_id="266">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="267">
  <img class="tooltipImage" src="/img/comp/경전선개통 중간.jpeg" , color: "#e73921" , img_id="268">
  <img class="tooltipImage" src="/img/comp/여의도 개발 중간.jpeg" , color: "#e73921" , img_id="269">
  <img class="tooltipImage" src="/img/comp/긴급지방장관회의 중간.jpeg" , color: "#e73921" , img_id="270">
  <img class="tooltipImage" src="/img/comp/주민등록증 중간.jpeg" , color: "#e73921" , img_id="271">
  <img class="tooltipImage" src="/img/comp/기자회견 중간.jpeg" , color: "#e73921" , img_id="272">
  <img class="tooltipImage" src="/img/comp/한미합동 공수작전 참관 중간.jpeg" , color: "#e73921" , img_id="273">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="274">
  <img class="tooltipImage" src="/img/comp/금화시민아파트 중간.jpeg" , color: "#e73921" , img_id="275">
  <img class="tooltipImage" src="/img/comp/한일합섬 중간.jpeg" , color: "#e73921" , img_id="276">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="277">
  <img class="tooltipImage" src="/img/comp/개헌 중간.jpeg" , color: "#e73921" , img_id="278">
  <img class="tooltipImage" src="/img/comp/3선 개헌안처리 중간.jpeg" , color: "#e73921" , img_id="279">
  <img class="tooltipImage" src="/img/comp/공군 중간.jpeg" , color: "#e73921" , img_id="280">
  <img class="tooltipImage" src="/img/comp/개헌 특별담화 중간.jpeg" , color: "#e73921" , img_id="281">
  <img class="tooltipImage" src="/img/comp/개헌안 국민투표 중간.jpeg" , color: "#e73921" , img_id="282">
  <img class="tooltipImage" src="/img/comp/헌법개정안공포 중간.jpeg" , color: "#e73921" , img_id="283">
  <img class="tooltipImage" src="/img/comp/3차 경제개발 중간.jpeg" , color: "#e73921" , img_id="284">
  <img class="tooltipImage" src="/img/comp/KAL여객기 중간.jpeg" , color: "#e73921" , img_id="285">
  <img class="tooltipImage" src="/img/comp/한남대교 중간.jpeg" , color: "#e73921" , img_id="286">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="287">
  <img class="tooltipImage" src="/img/comp/제주화력발전소 준공 중간.jpeg" , color: "#e73921" , img_id="288">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="289">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="290">
  <img class="tooltipImage" src="/img/comp/마포대교 중간.jpeg" , color: "#e73921" , img_id="291">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="292">
  <img class="tooltipImage" src="/img/comp/대북한관계선언 중간.jpeg" , color: "#e73921" , img_id="293">
  <img class="tooltipImage" src="/img/comp/여야영수회담 중간.jpeg" , color: "#e73921" , img_id="294">
  <img class="tooltipImage" src="/img/comp/한미간 안보문제 중간.jpeg" , color: "#e73921" , img_id="295">
  <img class="tooltipImage" src="/img/comp/인천제철준공 중간.jpeg" , color: "#e73921" , img_id="296">
  <img class="tooltipImage" src="/img/comp/국토종합개발 중간.jpeg" , color: "#e73921" , img_id="297">
  <img class="tooltipImage" src="/img/comp/정부종합청사 준공식 중간.jpeg" , color: "#e73921" , img_id="298">
  <img class="tooltipImage" src="/img/comp/서울지하철 1호선 기공식 중간.jpeg" , color: "#e73921" , img_id="299">
  <img class="tooltipImage" src="/img/comp/불출마선언 중간.jpeg" , color: "#e73921" , img_id="300">
  <img class="tooltipImage" src="/img/comp/대통령선거유세 중간.jpeg" , color: "#e73921" , img_id="301">
  <img class="tooltipImage" src="/img/comp/제7대대통령선거 중간.jpeg" , color: "#e73921" , img_id="302">
  <img class="tooltipImage" src="/img/comp/제8대 국회의원 총선거 중간.jpeg" , color: "#e73921" , img_id="303">
  <img class="tooltipImage" src="/img/comp/국무총리 김종필 임명 중간.jpeg" , color: "#e73921" , img_id="304">
  <img class="tooltipImage" src="/img/comp/동성호 중간.jpeg" , color: "#e73921" , img_id="305">
  <img class="tooltipImage" src="/img/comp/미 부통령 2차회담 중간.jpeg" , color: "#e73921" , img_id="306">
  <img class="tooltipImage" src="/img/comp/남북회담 지지성명 중간.jpeg" , color: "#e73921" , img_id="307">
  <img class="tooltipImage" src="/img/comp/내무부장관 임명 중간.jpeg" , color: "#e73921" , img_id="308">
  <img class="tooltipImage" src="/img/comp/국가비상사태선언 중간.jpeg" , color: "#e73921" , img_id="309">
  <img class="tooltipImage" src="/img/comp/대연각호텔사건 중간.jpeg" , color: "#e73921" , img_id="310">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="311">
  <img class="tooltipImage" src="/img/comp/연두순시시작 중간.jpeg" , color: "#e73921" , img_id="312">
  <img class="tooltipImage" src="/img/comp/수입정책보고 중간.jpeg" , color: "#e73921" , img_id="313">
  <img class="tooltipImage" src="/img/comp/지방장관 중간.jpeg" , color: "#e73921" , img_id="314">
  <img class="tooltipImage" src="/img/comp/4H클럽 경진대회 참석 중간.jpeg" , color: "#e73921" , img_id="315">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="316">
  <img class="tooltipImage" src="/img/comp/잠실대교 개통 중간.jpeg" , color: "#e73921" , img_id="317">
  <img class="tooltipImage" src="/img/comp/한일협력위원회 중간.jpeg" , color: "#e73921" , img_id="318">
  <img class="tooltipImage" src="/img/comp/83조치 중간.jpeg" , color: "#e73921" , img_id="319">
  <img class="tooltipImage" src="/img/comp/사채동결 중간.jpeg" , color: "#e73921" , img_id="320">
  <img class="tooltipImage" src="/img/comp/국립중앙박물관 중간.jpeg" , color: "#e73921" , img_id="321">
  <img class="tooltipImage" src="/img/comp/한국형 기관총 중간.jpeg" , color: "#e73921" , img_id="322">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="323">
  <img class="tooltipImage" src="/img/comp/헌법개정안담화문 중간.jpeg" , color: "#e73921" , img_id="324">
  <img class="tooltipImage" src="/img/comp/유신헌법안 중간.jpeg" , color: "#e73921" , img_id="325">
  <img class="tooltipImage" src="/img/comp/소양강다목적댐 담수식 참석 중간.jpeg" , color: "#e73921" , img_id="326">
  <img class="tooltipImage" src="/img/comp/국민교육 중간.jpeg" , color: "#e73921" , img_id="327">
  <img class="tooltipImage" src="/img/comp/유신헌법공포 중간.jpeg" , color: "#e73921" , img_id="328">
  <img class="tooltipImage" src="/img/comp/비상국무회의주재 중간.jpeg" , color: "#e73921" , img_id="329">
  <img class="tooltipImage" src="/img/comp/인구분산책 추진지시 중간.jpeg" , color: "#e73921" , img_id="330">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="331">
  <img class="tooltipImage" src="/img/comp/제 9대 국회의원 총선거 중간.jpeg" , color: "#e73921" , img_id="332">
  <img class="tooltipImage" src="/img/comp/국회개원식 중간.jpeg" , color: "#e73921" , img_id="333">
  <img class="tooltipImage" src="/img/comp/긴급조치 4호 선포 중간.jpeg" , color: "#e73921" , img_id="334">
  <img class="tooltipImage" src="/img/comp/남해대교 개통 중간.jpeg" , color: "#e73921" , img_id="335">
  <img class="tooltipImage" src="/img/comp/포항제철준공 중간.jpeg" , color: "#e73921" , img_id="336">
  <img class="tooltipImage" src="/img/comp/국립극장 중간.jpeg" , color: "#e73921" , img_id="337">
  <img class="tooltipImage" src="/img/comp/긴급조치1,2호 조치 중간.jpeg" , color: "#e73921" , img_id="338">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="339">
  <img class="tooltipImage" src="/img/comp/팔당댐 중간.jpeg" , color: "#e73921" , img_id="340">
  <img class="tooltipImage" src="/img/comp/선평화 후통일 통일방안 언명 중간.jpeg" , color: "#e73921" , img_id="341">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="342">
  <img class="tooltipImage" src="/img/comp/육영수 여사 묘소 분향 중간.jpeg" , color: "#e73921" , img_id="343">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="344">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="345">
  <img class="tooltipImage" src="/img/comp/국민투표결과담화 중간.jpeg" , color: "#e73921" , img_id="346">
  <img class="tooltipImage" src="/img/comp/유신헌법 국민투표실시 중간.jpeg" , color: "#e73921" , img_id="347">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="348">
  <img class="tooltipImage" src="/img/comp/긴급조치 7호 중간.jpeg" , color: "#e73921" , img_id="349">
  <img class="tooltipImage" src="/img/comp/긴급조치9호 중간.jpeg" , color: "#e73921" , img_id="350">
  <img class="tooltipImage" src="/img/comp/김영삼 신민단총재 회담 중간.jpeg" , color: "#e73921" , img_id="351">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="352">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="353">
  <img class="tooltipImage" src="/img/comp/주멕시코 대사 신임장 제정 중간.jpeg" , color: "#e73921" , img_id="354">
  <img class="tooltipImage" src="/img/comp/연두기자회견 중간.jpeg" , color: "#e73921" , img_id="355">
  <img class="tooltipImage" src="/img/comp/4대강 유역개발 집중 중간.jpeg" , color: "#e73921" , img_id="356">
  <img class="tooltipImage" src="/img/comp/버스안내양 후생복지 중간.jpeg" , color: "#e73921" , img_id="357">
  <img class="tooltipImage" src="/img/comp/국산화포재개발추진실태 보고 중간.jpeg" , color: "#e73921" , img_id="358">
  <img class="tooltipImage" src="/img/comp/제2기 유신정우회 의원 명단 발표 중간.jpeg" , color: "#e73921" , img_id="359">
  <img class="tooltipImage" src="/img/comp/그린벨트 중간.jpeg" , color: "#e73921" , img_id="360">
  <img class="tooltipImage" src="/img/comp/대덕연구단지 중간.jpeg" , color: "#e73921" , img_id="361">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="362">
  <img class="tooltipImage" src="/img/comp/천마총 중간.jpeg" , color: "#e73921" , img_id="363">
  <img class="tooltipImage" src="/img/comp/지방장관 접견 중간.jpeg" , color: "#e73921" , img_id="364">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="365">
  <img class="tooltipImage" src="/img/comp/판문점 미루나루사건 중간.jpeg" , color: "#e73921" , img_id="366">
  <img class="tooltipImage" src="/img/comp/판문점 사건에 대한 경고 메시지 중간.jpeg" , color: "#e73921" , img_id="367">
  <img class="tooltipImage" src="/img/comp/새마을성공사례발표보고 중간.jpeg" , color: "#e73921" , img_id="368">
  <img class="tooltipImage" src="/img/comp/연두기자회견2 중간.jpeg" , color: "#e73921" , img_id="369">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="370">
  <img class="tooltipImage" src="/img/comp/방위산업체 시찰 중간.jpeg" , color: "#e73921" , img_id="371">
  <img class="tooltipImage" src="/img/comp/경주 통일전 참관 중간.jpeg" , color: "#e73921" , img_id="372">
  <img class="tooltipImage" src="/img/comp/시정연설 중간.jpeg" , color: "#e73921" , img_id="373">
  <img class="tooltipImage" src="/img/comp/이리역폭발사고 중간.jpeg" , color: "#e73921" , img_id="374">
  <img class="tooltipImage" src="/img/comp/대구마산 고속도로 중간.jpeg" , color: "#e73921" , img_id="375">
  <img class="tooltipImage" src="/img/comp/수출100억 중간.jpeg" , color: "#e73921" , img_id="376">
  <img class="tooltipImage" src="/img/comp/정부 시정방침 7개항 발표 중간.jpeg" , color: "#e73921" , img_id="377">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="378">
  <img class="tooltipImage" src="/img/comp/남산3호터널 중간.jpeg" , color: "#e73921" , img_id="379">
  <img class="tooltipImage" src="/img/comp/통일주체국민회의 대의원선거 투표 중간.jpeg" , color: "#e73921" , img_id="380">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="381">
  <img class="tooltipImage" src="/img/comp/행주대교 개통식 중간.jpeg" , color: "#e73921" , img_id="382">
  <img class="tooltipImage" src="/img/comp/제10대국회의원선거 중간.jpeg" , color: "#e73921" , img_id="383">
  <img class="tooltipImage" src="/img/comp/수출대중공우위견지지시 중간.jpeg" , color: "#e73921" , img_id="384">
  <img class="tooltipImage" src="/img/comp/김포국제공항 확장공사현장 중간.jpeg" , color: "#e73921" , img_id="385">
  <img class="tooltipImage" src="/img/comp/한미 2차 정상회담 중간.jpeg" , color: "#e73921" , img_id="386">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="387">
  <img class="tooltipImage" src="/img/comp/최규하 당선 중간.jpeg" , color: "white" , img_id="388">
  <img class="tooltipImage" src="/img/comp/1026사태 중간.jpeg" , color: "white" , img_id="389">
  <img class="tooltipImage" src="/img/comp/_국가비상시국특별담화_ 발표 중간.jpeg" , color: "white" , img_id="390">
  <img class="tooltipImage" src="/img/comp/전투경찰대 설치법 시행령 중간.jpeg" , color: "white" , img_id="391">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "white" , img_id="392">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "white" , img_id="393">
  <img class="tooltipImage" src="/img/comp/철강공업육성법 개정법률 공포시행 중간.jpeg" , color: "white" , img_id="394">
  <img class="tooltipImage" src="/img/comp/국채법 중간.jpeg" , color: "white" , img_id="395">
  <img class="tooltipImage" src="/img/comp/IBRD 중간.jpeg" , color: "white" , img_id="396">
  <img class="tooltipImage" src="/img/comp/반공법 중간.jpeg" , color: "white" , img_id="397">
  <img class="tooltipImage" src="/img/comp/전두환 임명 중간.jpeg" , color: "white" , img_id="398">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "white" , img_id="399">
  <img class="tooltipImage" src="/img/comp/국가 중간.jpeg" , color: "white" , img_id="400">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "white" , img_id="401">
  <img class="tooltipImage" src="/img/comp/성산대교 중간.jpeg" , color: "white" , img_id="402">
  <img class="tooltipImage" src="/img/comp/광주민주화운동 수습상황 보고 중간.jpeg" , color: "white" , img_id="403">
  <img class="tooltipImage" src="/img/comp/김포공항 신청사 개관식 참석 중간.jpeg" , color: "white" , img_id="404">
  <img class="tooltipImage" src="/img/comp/국민총생산 추계보고 중간.jpeg" , color: "white" , img_id="405">
  <img class="tooltipImage" src="/img/comp/대통령사임 중간.jpeg" , color: "white" , img_id="406">
  <img class="tooltipImage" src="/img/comp/제 12대 대통령취임식 중간.jpeg" , color: "#e73921" , img_id="407">
  <img class="tooltipImage" src="/img/comp/5.18광주민주화운동(2) 중간.jpeg" , color: "#e73921" , img_id="408">
  <img class="tooltipImage" src="/img/comp/내각발표 중간.jpeg" , color: "#e73921" , img_id="409">
  <img class="tooltipImage" src="/img/comp/물가안정세 유지 지시 중간.jpeg" , color: "#e73921" , img_id="410">
  <img class="tooltipImage" src="/img/comp/부산도시고속도로 중간.jpeg" , color: "#e73921" , img_id="411">
  <img class="tooltipImage" src="/img/comp/헌법개헌 투표 중간.jpeg" , color: "#e73921" , img_id="412">
  <img class="tooltipImage" src="/img/comp/국가보위입법회의 의원 임명 발표 중간.jpeg" , color: "#e73921" , img_id="413">
  <img class="tooltipImage" src="/img/comp/지하철2호선 중간.jpeg" , color: "#e73921" , img_id="414">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="415">
  <img class="tooltipImage" src="/img/comp/국가보안법개정 중간.jpeg" , color: "#e73921" , img_id="416">
  <img class="tooltipImage" src="/img/comp/비상계엄해제공고 중간.jpeg" , color: "#e73921" , img_id="417">
  <img class="tooltipImage" src="/img/comp/대통령선거인선거 중간.jpeg" , color: "#e73921" , img_id="418">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="419">
  <img class="tooltipImage" src="/img/comp/노동부승격 중간.jpeg" , color: "#e73921" , img_id="420">
  <img class="tooltipImage" src="/img/comp/국회의원총선거 중간.jpeg" , color: "#e73921" , img_id="421">
  <img class="tooltipImage" src="/img/comp/초대 노동부장관 임명 중간.jpeg" , color: "#e73921" , img_id="422">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="423">
  <img class="tooltipImage" src="/img/comp/평화통일정책자문회의 개회사 중간.jpeg" , color: "#e73921" , img_id="424">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="425">
  <img class="tooltipImage" src="/img/comp/88올림픽 유치 지시 중간.jpeg" , color: "#e73921" , img_id="426">
  <img class="tooltipImage" src="/img/comp/88올림픽개최확정 중간.jpeg" , color: "#e73921" , img_id="427">
  <img class="tooltipImage" src="/img/comp/88올림픽고속도로 기공식 중간.jpeg" , color: "#e73921" , img_id="428">
  <img class="tooltipImage" src="/img/comp/원효대교 중간.jpeg" , color: "#e73921" , img_id="429">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="430">
  <img class="tooltipImage" src="/img/comp/사회정화국민운동 중간.jpeg" , color: "#e73921" , img_id="431">
  <img class="tooltipImage" src="/img/comp/83조치 폐지 중간.jpeg" , color: "#e73921" , img_id="432">
  <img class="tooltipImage" src="/img/comp/신임국무총리임명 중간.jpeg" , color: "#e73921" , img_id="433">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="434">
  <img class="tooltipImage" src="/img/comp/우범곤순경 중간.jpeg" , color: "#e73921" , img_id="435">
  <img class="tooltipImage" src="/img/comp/일부 내각 교체 중간.jpeg" , color: "#e73921" , img_id="436">
  <img class="tooltipImage" src="/img/comp/반포대교 개통식 중간.jpeg" , color: "#e73921" , img_id="437">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="438">
  <img class="tooltipImage" src="/img/comp/울진 원자력 중간.jpeg" , color: "#e73921" , img_id="439">
  <img class="tooltipImage" src="/img/comp/지하철2호선2 중간.jpeg" , color: "#e73921" , img_id="440">
  <img class="tooltipImage" src="/img/comp/서민생활시찰 중간.jpeg" , color: "#e73921" , img_id="441">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="442">
  <img class="tooltipImage" src="/img/comp/정보산업육성법제정 중간.jpeg" , color: "#e73921" , img_id="443">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="444">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="445">
  <img class="tooltipImage" src="/img/comp/하계 기자회견 중간.jpeg" , color: "#e73921" , img_id="446">
  <img class="tooltipImage" src="/img/comp/버마 아웅산 중간.jpeg" , color: "#e73921" , img_id="447">
  <img class="tooltipImage" src="/img/comp/쌍용작전 중간.jpeg" , color: "#e73921" , img_id="448">
  <img class="tooltipImage" src="/img/comp/수도권 경비상황 점검 중간.jpeg" , color: "#e73921" , img_id="449">
  <img class="tooltipImage" src="/img/comp/한미정상회담 중간.jpeg" , color: "#e73921" , img_id="450">
  <img class="tooltipImage" src="/img/comp/전국신문방송발행인 및 편집보도국장회의 중간.jpeg" , color: "#e73921" , img_id="451">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="452">
  <img class="tooltipImage" src="/img/comp/과천 서울대공원 동물원 개원식 중간.jpeg" , color: "#e73921" , img_id="453">
  <img class="tooltipImage" src="/img/comp/안보태세 중간.jpeg" , color: "#e73921" , img_id="454">
  <img class="tooltipImage" src="/img/comp/88올림픽고속도로 중간.jpeg" , color: "#e73921" , img_id="455">
  <img class="tooltipImage" src="/img/comp/공동번영제의 중간.jpeg" , color: "#e73921" , img_id="456">
  <img class="tooltipImage" src="/img/comp/일한친선협회 회장단 접견 중간.jpeg" , color: "#e73921" , img_id="457">
  <img class="tooltipImage" src="/img/comp/진도대교 준공식 참석 치사 중간.jpeg" , color: "#e73921" , img_id="458">
  <img class="tooltipImage" src="/img/comp/예술의 전당 중간.jpeg" , color: "#e73921" , img_id="459">
  <img class="tooltipImage" src="/img/comp/국제노동기구ILO접견 중간.jpeg" , color: "#e73921" , img_id="460">
  <img class="tooltipImage" src="/img/comp/대간첩대책중앙회의주재 중간.jpeg" , color: "#e73921" , img_id="461">
  <img class="tooltipImage" src="/img/comp/정치폭력 엄단 중간.jpeg" , color: "#e73921" , img_id="462">
  <img class="tooltipImage" src="/img/comp/제12대 국회의원 중간.jpeg" , color: "#e73921" , img_id="463">
  <img class="tooltipImage" src="/img/comp/국무총리및장관임명 중간.jpeg" , color: "#e73921" , img_id="464">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="465">
  <img class="tooltipImage" src="/img/comp/축산농가 중간.jpeg" , color: "#e73921" , img_id="466">
  <img class="tooltipImage" src="/img/comp/학력고사 중간.jpeg" , color: "#e73921" , img_id="467">
  <img class="tooltipImage" src="/img/comp/교육개혁심의회의 중간.jpeg" , color: "#e73921" , img_id="468">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="469">
  <img class="tooltipImage" src="/img/comp/85필승특전훈련 참관 중간.jpeg" , color: "#e73921" , img_id="470">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="471">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="472">
  <img class="tooltipImage" src="/img/comp/10개부처 내각 개편 중간.jpeg" , color: "#e73921" , img_id="473">
  <img class="tooltipImage" src="/img/comp/올림픽대로 개통식 참석 중간.jpeg" , color: "#e73921" , img_id="474">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="475">
  <img class="tooltipImage" src="/img/comp/한미연합사령부 방문 중간.jpeg" , color: "#e73921" , img_id="476">
  <img class="tooltipImage" src="/img/comp/개헌문제관련국정연설 중간.jpeg" , color: "#e73921" , img_id="477">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="478">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="479">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="480">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="481">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="482">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="483">
  <img class="tooltipImage" src="/img/comp/국가전산화 확대회의 주재 중간.jpeg" , color: "#e73921" , img_id="484">
  <img class="tooltipImage" src="/img/comp/헌법개정안공고 중간.jpeg" , color: "#e73921" , img_id="485">
  <img class="tooltipImage" src="/img/comp/_개정 헌법_ 공포 중간.jpeg" , color: "#e73921" , img_id="486">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="487">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="488">
  <img class="tooltipImage" src="/img/comp/광주민주화운동 관련 입장 발표 중간.jpeg" , color: "#e73921" , img_id="489">
  <img class="tooltipImage" src="/img/comp/노태우 대통령 제13대 대통령 취임선서1(1988)  중간.jpeg" , color: "#e73921" , img_id="490">
  <img class="tooltipImage" src="/img/comp/국무회의 중간.jpeg" , color: "#e73921" , img_id="491">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="492">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="493">
  <img class="tooltipImage" src="/img/comp/소유재산발표 중간.jpeg" , color: "#e73921" , img_id="494">
  <img class="tooltipImage" src="/img/comp/제13대 국회의원 선거 중간.jpeg" , color: "#e73921" , img_id="495">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="496">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="497">
  <img class="tooltipImage" src="/img/comp/윤보선 전 대통령 접견 중간.jpeg" , color: "#e73921" , img_id="498">
  <img class="tooltipImage" src="/img/comp/김영삼 접견 중간.jpeg" , color: "#e73921" , img_id="499">
  <img class="tooltipImage" src="/img/comp/김대중 회담 중간.jpeg" , color: "#e73921" , img_id="500">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="501">
  <img class="tooltipImage" src="/img/comp/국회국정연설 중간.jpeg" , color: "#e73921" , img_id="502">
  <img class="tooltipImage" src="/img/comp/시국논의 중간.jpeg" , color: "#e73921" , img_id="503">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="504">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="505">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="506">
  <img class="tooltipImage" src="/img/comp/연두기자회견 중간.jpeg" , color: "#e73921" , img_id="507">
  <img class="tooltipImage" src="/img/comp/대간첩대책본부 중간.jpeg" , color: "#e73921" , img_id="508">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="509">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="510">
  <img class="tooltipImage" src="/img/comp/광주 연두순시 중간.jpeg" , color: "#e73921" , img_id="511">
  <img class="tooltipImage" src="/img/comp/한미정상회담 중간.jpeg" , color: "#e73921" , img_id="512">
  <img class="tooltipImage" src="/img/comp/법률안 거부권 행사 중간.jpeg" , color: "#e73921" , img_id="513">
  <img class="tooltipImage" src="/img/comp/분당일산 신도시 중간.jpeg" , color: "#e73921" , img_id="514">
  <img class="tooltipImage" src="/img/comp/동의대사태2 중간.jpeg" , color: "#e73921" , img_id="515">
  <img class="tooltipImage" src="/img/comp/첫 주례 라디오 국정방송 중간.jpeg" , color: "#e73921" , img_id="516">
  <img class="tooltipImage" src="/img/comp/민주주의파괴 중간.jpeg" , color: "#e73921" , img_id="517">
  <img class="tooltipImage" src="/img/comp/김종필 신민주공화당 총재 회담 중간.jpeg" , color: "#e73921" , img_id="518">
  <img class="tooltipImage" src="/img/comp/특별수사기동대 신설 지시 중간.jpeg" , color: "#e73921" , img_id="519">
  <img class="tooltipImage" src="/img/comp/_한민족공동체 통일방안_ 발표 중간.jpeg" , color: "#e73921" , img_id="520">
  <img class="tooltipImage" src="/img/comp/88선봉섬멸작전 참관 중간.jpeg" , color: "#e73921" , img_id="521">
  <img class="tooltipImage" src="/img/comp/_부시 미 대통령과의 정상회담 중간.jpeg" , color: "#e73921" , img_id="522">
  <img class="tooltipImage" src="/img/comp/극동정유공장 준공식 참석 연설 중간.jpeg" , color: "#e73921" , img_id="523">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="524">
  <img class="tooltipImage" src="/img/comp/5공 청산종결 선언 중간.jpeg" , color: "#e73921" , img_id="525">
  <img class="tooltipImage" src="/img/comp/남북정상회담 개최 촉구 중간.jpeg" , color: "#e73921" , img_id="526">
  <img class="tooltipImage" src="/img/comp/공노명 초대 주소련영사처장 중간.jpeg" , color: "#e73921" , img_id="527">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="528">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="529">
  <img class="tooltipImage" src="/img/comp/소련방문 중간.jpeg" , color: "#e73921" , img_id="530">
  <img class="tooltipImage" src="/img/comp/대한항공 858기 폭파범 특별사면 중간.jpeg" , color: "#e73921" , img_id="531">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="532">
  <img class="tooltipImage" src="/img/comp/_시국에 관한 특별담화문_ 발표 중간.jpeg" , color: "#e73921" , img_id="533">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="534">
  <img class="tooltipImage" src="/img/comp/내각제 개헌 중간.jpeg" , color: "#e73921" , img_id="535">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="536">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="537">
  <img class="tooltipImage" src="/img/comp/남북고위급회담 관련 관계장관회의 주재 중간.jpeg" , color: "#e73921" , img_id="538">
  <img class="tooltipImage" src="/img/comp/북한 연형묵 총리 접견 중간.jpeg" , color: "#e73921" , img_id="539">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="540">
  <img class="tooltipImage" src="/img/comp/대통령관저준공식 중간.jpeg" , color: "#e73921" , img_id="541">
  <img class="tooltipImage" src="/img/comp/한국대통령 최초 중간.jpeg" , color: "#e73921" , img_id="542">
  <img class="tooltipImage" src="/img/comp/대학입시 중간.jpeg" , color: "#e73921" , img_id="543">
  <img class="tooltipImage" src="/img/comp/외무부장관지시 중간.jpeg" , color: "#e73921" , img_id="544">
  <img class="tooltipImage" src="/img/comp/서해안 고속도로 기공식 중간.jpeg" , color: "#e73921" , img_id="545">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="546">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="547">
  <img class="tooltipImage" src="/img/comp/강경대 사망사건 중간.jpeg" , color: "#e73921" , img_id="548">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="549">
  <img class="tooltipImage" src="/img/comp/정원식 계란2 중간.jpeg" , color: "#e73921" , img_id="550">
  <img class="tooltipImage" src="/img/comp/주안댐 중간.jpeg" , color: "#e73921" , img_id="551">
  <img class="tooltipImage" src="/img/comp/30대재벌총수초청 중간.jpeg" , color: "#e73921" , img_id="552">
  <img class="tooltipImage" src="/img/comp/남북한유엔동시가입 중간.jpeg" , color: "#e73921" , img_id="553">
  <img class="tooltipImage" src="/img/comp/남북고위급 중간.jpeg" , color: "#e73921" , img_id="554">
  <img class="tooltipImage" src="/img/comp/한반도 비핵화 특별담화 중간.jpeg" , color: "#e73921" , img_id="555">
  <img class="tooltipImage" src="/img/comp/노태우 대통령 비핵선언연설(1991)  중간.jpeg" , color: "#e73921" , img_id="556">
  <img class="tooltipImage" src="/img/comp/새만금간척종합개발 기공식 중간.jpeg" , color: "#e73921" , img_id="557">
  <img class="tooltipImage" src="/img/comp/남한핵 중간.jpeg" , color: "#e73921" , img_id="558">
  <img class="tooltipImage" src="/img/comp/한미정상회담2 중간.jpeg" , color: "#e73921" , img_id="559">
  <img class="tooltipImage" src="/img/comp/제1차 한일정상회담 중간.jpeg" , color: "#e73921" , img_id="560">
  <img class="tooltipImage" src="/img/comp/제2차 한일정상회담 중간.jpeg" , color: "#e73921" , img_id="561">
  <img class="tooltipImage" src="/img/comp/비핵화 중간.jpeg" , color: "#e73921" , img_id="562">
  <img class="tooltipImage" src="/img/comp/남북기본합의서 특별담화문 중간.jpeg" , color: "#e73921" , img_id="563">
  <img class="tooltipImage" src="/img/comp/14대국회의원 중간.jpeg" , color: "#e73921" , img_id="564">
  <img class="tooltipImage" src="/img/comp/우리별 1호 중간.jpeg" , color: "#e73921" , img_id="565">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="566">
  <img class="tooltipImage" src="/img/comp/자유로 1단계 준공식 참석 중간.jpeg" , color: "#e73921" , img_id="567">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="568">
  <img class="tooltipImage" src="/img/comp/대덕연구단지조성 중간.jpeg" , color: "#e73921" , img_id="569">
  <img class="tooltipImage" src="/img/comp/노태우 퇴임 중간.jpeg" , color: "#e73921" , img_id="570">
  <img class="tooltipImage" src="/img/comp/김영삼대통령 제14대 대통령취임식 경축 리셉션 (1993) 중간.jpeg" , color: "#e73921" , img_id="571">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="572">
  <img class="tooltipImage" src="/img/comp/부패와의 전쟁 선언 중간.jpeg" , color: "#e73921" , img_id="573">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="574">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="575">
  <img class="tooltipImage" src="/img/comp/신경제로의 새로운 도약을 특별담화 중간.jpeg" , color: "#e73921" , img_id="576">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="577">
  <img class="tooltipImage" src="/img/comp/역사바로세우기 특별담화 중간.jpeg" , color: "#e73921" , img_id="578">
  <img class="tooltipImage" src="/img/comp/BBC 회견 중간.jpeg" , color: "#e73921" , img_id="579">
  <img class="tooltipImage" src="/img/comp/신경제5개년계획 확정 시행 중간.jpeg" , color: "#e73921" , img_id="580">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="581">
  <img class="tooltipImage" src="/img/comp/금융실명제실시 중간.jpeg" , color: "#e73921" , img_id="582">
  <img class="tooltipImage" src="/img/comp/부마항쟁 중간.jpeg" , color: "#e73921" , img_id="583">
  <img class="tooltipImage" src="/img/comp/한일정상공동기자회견 중간.jpeg" , color: "#e73921" , img_id="584">
  <img class="tooltipImage" src="/img/comp/APEC정상회담 기조연설 중간.jpeg" , color: "#e73921" , img_id="585">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="586">
  <img class="tooltipImage" src="/img/comp/6대국정과제 중간.jpeg" , color: "#e73921" , img_id="587">
  <img class="tooltipImage" src="/img/comp/생활개혁보고대회 주재 중간.jpeg" , color: "#e73921" , img_id="588">
  <img class="tooltipImage" src="/img/comp/남산1호쌍둥이터널 중간.jpeg" , color: "#e73921" , img_id="589">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="590">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="591">
  <img class="tooltipImage" src="/img/comp/비상경계령 중간.jpeg" , color: "#e73921" , img_id="592">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="593">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="594">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="595">
  <img class="tooltipImage" src="/img/comp/성수대교붕괴 중간.jpeg" , color: "#e73921" , img_id="596">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="597">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="598">
  <img class="tooltipImage" src="/img/comp/세계화추진위원회 중간.jpeg" , color: "#e73921" , img_id="599">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="600">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="601">
  <img class="tooltipImage" src="/img/comp/대구지하철 가스폭발사고 관련 지시 중간.jpeg" , color: "#e73921" , img_id="602">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="603">
  <img class="tooltipImage" src="/img/comp/삼풍백화점붕괴 중간.jpeg" , color: "#e73921" , img_id="604">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="605">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="606">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="607">
  <img class="tooltipImage" src="/img/comp/세계화추진위원회 보고 중간.jpeg" , color: "#e73921" , img_id="608">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="609">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="610">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="611">
  <img class="tooltipImage" src="/img/comp/제15대 국회의원 선거 중간.jpeg" , color: "#e73921" , img_id="612">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="613">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="614">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="615">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="616">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="617">
  <img class="tooltipImage" src="/img/comp/KAL기 괌 추락사고 중간.jpeg" , color: "#e73921" , img_id="618">
  <img class="tooltipImage" src="/img/comp/한반도 평화정착 4대 원칙 제시 중간.jpeg" , color: "#e73921" , img_id="619">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="620">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="621">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="622">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="623">
  <img class="tooltipImage" src="/img/comp/경제살리기특별담화 중간.jpeg" , color: "#e73921" , img_id="624">
  <img class="tooltipImage" src="/img/comp/제15대 김대중대통령 취임사 후 손들어 군중에 답례(1998) 중간.jpeg" , color: "#5e83ba" ,
    img_id="625">
  <img class="tooltipImage" src="/img/comp/_정부조직법_에 서명 중간.jpeg" , color: "#5e83ba" , img_id="626">
  <img class="tooltipImage" src="/img/comp/장관임명 중간.jpeg" , color: "#5e83ba" , img_id="627">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="628">
  <img class="tooltipImage" src="/img/comp/제1차 경제대책조정회의 주재 중간.jpeg" , color: "#5e83ba" , img_id="629">
  <img class="tooltipImage" src="/img/comp/기업 북한 투자제한 철폐 지시 중간.jpeg" , color: "#5e83ba" , img_id="630">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="631">
  <img class="tooltipImage" src="/img/comp/일본총리정상회담 중간.jpeg" , color: "#5e83ba" , img_id="632">
  <img class="tooltipImage" src="/img/comp/일본 대중문화 단계적 개방 보고 중간.jpeg" , color: "#5e83ba" , img_id="633">
  <img class="tooltipImage" src="/img/comp/경제단체장 간담회 중간.jpeg" , color: "#5e83ba" , img_id="634">
  <img class="tooltipImage" src="/img/comp/국민과의 텔레비전 대화 중간.jpeg" , color: "#5e83ba" , img_id="635">
  <img class="tooltipImage" src="/img/comp/제 1차 정보화전략회의 중간.jpeg" , color: "#5e83ba" , img_id="636">
  <img class="tooltipImage" src="/img/comp/국회 개원 50주년 기념식 중간.jpeg" , color: "#5e83ba" , img_id="637">
  <img class="tooltipImage" src="/img/comp/제2회 전국동시지방선거 중간.jpeg" , color: "#5e83ba" , img_id="638">
  <img class="tooltipImage" src="/img/comp/미셀 캉드쉬 국제통화기금(IMF) 총재 중간.jpeg" , color: "#5e83ba" , img_id="639">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="640">
  <img class="tooltipImage" src="/img/comp/부실기업 중간.jpeg" , color: "#5e83ba" , img_id="641">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="642">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="643">
  <img class="tooltipImage" src="/img/comp/출입기자단오찬 중간.jpeg" , color: "#5e83ba" , img_id="644">
  <img class="tooltipImage" src="/img/comp/일본군 위안부 문제의 일본 정부 책임 강조 중간.jpeg" , color: "#5e83ba" , img_id="645">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="646">
  <img class="tooltipImage" src="/img/comp/경제관련 특별기자회견 중간.jpeg" , color: "#5e83ba" , img_id="647">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="648">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="649">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="650">
  <img class="tooltipImage" src="/img/comp/APEC 회담 기조발언 중간.jpeg" , color: "#5e83ba" , img_id="651">
  <img class="tooltipImage" src="/img/comp/경제대책조정회의 중간.jpeg" , color: "#5e83ba" , img_id="652">
  <img class="tooltipImage" src="/img/comp/국무회의 중간.jpeg" , color: "#5e83ba" , img_id="653">
  <img class="tooltipImage" src="/img/comp/국가안전보장회의(NSC) 주재 중간.jpeg" , color: "#5e83ba" , img_id="654">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="655">
  <img class="tooltipImage" src="/img/comp/일본 외무상 접견 중간.jpeg" , color: "#5e83ba" , img_id="656">
  <img class="tooltipImage" src="/img/comp/국민과 텔레비전대화 중간.jpeg" , color: "#5e83ba" , img_id="657">
  <img class="tooltipImage" src="/img/comp/제10회 세계 언론인 초청 국제회의 중간.jpeg" , color: "#5e83ba" , img_id="658">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="659">
  <img class="tooltipImage" src="/img/comp/경제5단체장들과회동 중간.jpeg" , color: "#5e83ba" , img_id="660">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="661">
  <img class="tooltipImage" src="/img/comp/기업총수 만남 중간.jpeg" , color: "#5e83ba" , img_id="662">
  <img class="tooltipImage" src="/img/comp/제7차 APEC정상회의 중간.jpeg" , color: "#5e83ba" , img_id="663">
  <img class="tooltipImage" src="/img/comp/서울 NGO세계대회 개막식 중간.jpeg" , color: "#5e83ba" , img_id="664">
  <img class="tooltipImage" src="/img/comp/캉드쉬 국제통화기금총재(IMF) 접견 중간.jpeg" , color: "#5e83ba" , img_id="665">
  <img class="tooltipImage" src="/img/comp/민주화 중간.jpeg" , color: "#5e83ba" , img_id="666">
  <img class="tooltipImage" src="/img/comp/유엔개발계획UNDP 총재 중간.jpeg" , color: "#5e83ba" , img_id="667">
  <img class="tooltipImage" src="/img/comp/교황청 국빈방문 중간.jpeg" , color: "#5e83ba" , img_id="668">
  <img class="tooltipImage" src="/img/comp/베를린선언 중간.jpeg" , color: "#5e83ba" , img_id="669">
  <img class="tooltipImage" src="/img/comp/서울포럼 개막식 참석 중간.jpeg" , color: "#5e83ba" , img_id="670">
  <img class="tooltipImage" src="/img/comp/제 16대 국회의원 총선거 중간.jpeg" , color: "#5e83ba" , img_id="671">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="672">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="673">
  <img class="tooltipImage" src="/img/comp/한미일 정상회담 중간.jpeg" , color: "#5e83ba" , img_id="674">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="675">
  <img class="tooltipImage" src="/img/comp/2차 정상회담 중간.jpeg" , color: "#5e83ba" , img_id="676">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="677">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="678">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="679">
  <img class="tooltipImage" src="/img/comp/노사정위원회접견 중간.jpeg" , color: "#5e83ba" , img_id="680">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="681">
  <img class="tooltipImage" src="/img/comp/유엔 중간.jpeg" , color: "#5e83ba" , img_id="682">
  <img class="tooltipImage" src="/img/comp/노벨 중간.jpeg" , color: "#5e83ba" , img_id="683">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="684">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="685">
  <img class="tooltipImage" src="/img/comp/여성부신설 중간.jpeg" , color: "#5e83ba" , img_id="686">
  <img class="tooltipImage" src="/img/comp/생태계 중간.jpeg" , color: "#5e83ba" , img_id="687">
  <img class="tooltipImage" src="/img/comp/대우사태 중간.jpeg" , color: "#5e83ba" , img_id="688">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="689">
  <img class="tooltipImage" src="/img/comp/일본 역사교과서 왜곡 시정 촉구 중간.jpeg" , color: "#5e83ba" , img_id="690">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="691">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="692">
  <img class="tooltipImage" src="/img/comp/김대중대통령 2002월드컵 축구대회 직위원회 방문준비 현황보고 청취  중간.jpeg" , color: "#5e83ba" ,
    img_id="693">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="694">
  <img class="tooltipImage" src="/img/comp/나카소네 前 일본총리 접견(2003) 중간.jpeg" , color: "#5e83ba" , img_id="695">
  <img class="tooltipImage" src="/img/comp/스트롱 UN사무총장 자문관을 접견 중간.jpeg" , color: "#5e83ba" , img_id="696">
  <img class="tooltipImage" src="/img/comp/전국검사들과의대화 중간.jpeg" , color: "#5e83ba" , img_id="697">
  <img class="tooltipImage" src="/img/comp/러시아 국방장관 접견(2003)2 중간.jpeg" , color: "#5e83ba" , img_id="698">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="699">
  <img class="tooltipImage" src="/img/comp/식목일나무심기(2003) 중간.jpeg" , color: "#5e83ba" , img_id="700">
  <img class="tooltipImage" src="/img/comp/관리직여성 공무원과의 대화 및 오찬(2003) 중간.jpeg" , color: "#5e83ba" , img_id="701">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="702">
  <img class="tooltipImage" src="/img/comp/한미 동맹 50주년 기념만찬(2003) 중간.jpeg" , color: "#5e83ba" , img_id="703">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="704">
  <img class="tooltipImage" src="/img/comp/전직 대통령 내외 만찬(2004) 중간.jpeg" , color: "#5e83ba" , img_id="705">
  <img class="tooltipImage" src="/img/comp/노무현 신행정 수도론 중간.jpeg" , color: "#5e83ba" , img_id="706">
  <img class="tooltipImage" src="/img/comp/방송기자클럽 초청 특별회견 중간.jpeg" , color: "#5e83ba" , img_id="707">
  <img class="tooltipImage" src="/img/comp/소상공인 재래시장혁신 보고대회 중간.jpeg" , color: "#5e83ba" , img_id="708">
  <img class="tooltipImage" src="/img/comp/재래시장 방문(2004) 중간.jpeg" , color: "#5e83ba" , img_id="709">
  <img class="tooltipImage" src="/img/comp/노무현 탄핵 소추 통과 중간.jpeg" , color: "#5e83ba" , img_id="710">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="711">
  <img class="tooltipImage" src="/img/comp/국무회의 중간.jpeg" , color: "#5e83ba" , img_id="712">
  <img class="tooltipImage" src="/img/comp/한일 친선협회 대표단 초청 오찬 중간.jpeg" , color: "#5e83ba" , img_id="713">
  <img class="tooltipImage" src="/img/comp/아테네올림픽 격려(2004) 중간.jpeg" , color: "#5e83ba" , img_id="714">
  <img class="tooltipImage" src="/img/comp/광주비엔날레 개막식 및 문화수도원년 선포식(2004) 중간.jpeg" , color: "#5e83ba" , img_id="715">
  <img class="tooltipImage" src="/img/comp/한일 의원연맹회장단 접견(2004) 중간.jpeg" , color: "#5e83ba" , img_id="716">
  <img class="tooltipImage" src="/img/comp/마찌무라 일본 외상 접견(2004) 중간.jpeg" , color: "#5e83ba" , img_id="717">
  <img class="tooltipImage" src="/img/comp/한-칠레 공동 기자회견 중간.jpeg" , color: "#5e83ba" , img_id="718">
  <img class="tooltipImage" src="/img/comp/한-브라질 경제인 간담회(2004) 중간.jpeg" , color: "#5e83ba" , img_id="719">
  <img class="tooltipImage" src="/img/comp/BBC 인터뷰 2(2004) 중간.jpeg" , color: "#5e83ba" , img_id="720">
  <img class="tooltipImage" src="/img/comp/긴급기내기자회견(2004) 중간.jpeg" , color: "#5e83ba" , img_id="721">
  <img class="tooltipImage" src="/img/comp/자이툰부대 방문(2004) 중간.jpeg" , color: "#5e83ba" , img_id="722">
  <img class="tooltipImage" src="/img/comp/중부내륙 고속도로 개통식(2004) 중간.jpeg" , color: "#5e83ba" , img_id="723">
  <img class="tooltipImage" src="/img/comp/사법개혁위원회 건의문 보고 중간.jpeg" , color: "#5e83ba" , img_id="724">
  <img class="tooltipImage" src="/img/comp/한나라 당대표와의 회담(2005)  중간.jpeg" , color: "#5e83ba" , img_id="725">
  <img class="tooltipImage" src="/img/comp/기내에서 생신축하 중간.jpeg" , color: "#5e83ba" , img_id="726">
  <img class="tooltipImage" src="/img/comp/CNN 인터뷰 중간.jpeg" , color: "#5e83ba" , img_id="727">
  <img class="tooltipImage" src="/img/comp/제37차 한미연례안보협의회의 중간.jpeg" , color: "#5e83ba" , img_id="728">
  <img class="tooltipImage" src="/img/comp/제57주년 국군의날 기념 행사(2005) 중간.jpeg" , color: "#5e83ba" , img_id="729">
  <img class="tooltipImage" src="/img/comp/정상선언문 발표(2005) 중간.jpeg" , color: "#5e83ba" , img_id="730">
  <img class="tooltipImage" src="/img/comp/바이체커 전 독일총리 접견 중간.jpeg" , color: "#5e83ba" , img_id="731">
  <img class="tooltipImage" src="/img/comp/폭설피해 복구현장(2006) 중간.jpeg" , color: "#5e83ba" , img_id="732">
  <img class="tooltipImage" src="/img/comp/국민과의 인터넷 대화 중간.jpeg" , color: "#5e83ba" , img_id="733">
  <img class="tooltipImage" src="/img/comp/한-UAE 정상회담(2006) 중간.jpeg" , color: "#5e83ba" , img_id="734">
  <img class="tooltipImage" src="/img/comp/장애인영화 관람-맨발의기봉이(2006) 중간.jpeg" , color: "#5e83ba" , img_id="735">
  <img class="tooltipImage" src="/img/comp/한-루마니아 공식 환영식(2006) 중간.jpeg" , color: "#5e83ba" , img_id="736">
  <img class="tooltipImage" src="/img/comp/MBC 100분토론 녹화(2006) 중간.jpeg" , color: "#5e83ba" , img_id="737">
  <img class="tooltipImage" src="/img/comp/한미FTA 관련 특별담화 중간.jpeg" , color: "#5e83ba" , img_id="738">
  <img class="tooltipImage" src="/img/comp/2014 평창 동계올림픽 유치활동 관계자 격려 오찬(2007) 중간.jpeg" , color: "#5e83ba" ,
    img_id="739">
  <img class="tooltipImage" src="/img/comp/민주평통 자문회의 제13기 전체회의(2007) 중간.jpeg" , color: "#5e83ba" , img_id="740">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="741">
  <img class="tooltipImage" src="/img/comp/남북1차 정상회담(2007) 중간.jpeg" , color: "#5e83ba" , img_id="742">
  <img class="tooltipImage" src="/img/comp/평화자동차 방문(2007) 중간.jpeg" , color: "#5e83ba" , img_id="743">
  <img class="tooltipImage" src="/img/comp/남측 CIQ도착 환영 행사(2007) 중간.jpeg" , color: "#5e83ba" , img_id="744">
  <img class="tooltipImage" src="/img/comp/남북정상회담관련 외신기자 간담회(2007) 중간.jpeg" , color: "#5e83ba" , img_id="745">
  <img class="tooltipImage" src="/img/comp/민주평통운영 상임위회의(제51차) 중간.jpeg" , color: "#5e83ba" , img_id="746">
  <img class="tooltipImage" src="/img/comp/무안 국제공항 개항식(2007) 중간.jpeg" , color: "#5e83ba" , img_id="747">
  <img class="tooltipImage" src="/img/comp/고맙습니다 증도 작은도서관 개관식(2007) 중간.jpeg" , color: "#5e83ba" , img_id="748">
  <img class="tooltipImage" src="/img/comp/서울시장 면담(2007) 중간.jpeg" , color: "#5e83ba" , img_id="749">
  <img class="tooltipImage" src="/img/comp/태안 유류오염사고현장 중간.jpeg" , color: "#5e83ba" , img_id="750">
  <img class="tooltipImage" src="/img/comp/대통령 선거 투표(2007) 중간.jpeg" , color: "#5e83ba" , img_id="751">
  <img class="tooltipImage" src="/img/comp/17대 대통령 당선인과의 만찬 중간.jpeg" , color: "#5e83ba" , img_id="752">
  <img class="tooltipImage" src="/img/comp/어청수 경찰청장 임명장 수여식 중간.jpeg" , color: "#5e83ba" , img_id="753">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#5e83ba" , img_id="754">
  <img class="tooltipImage" src="/img/comp/이명박 당선 2 중간.jpeg" , color: "#e73921" , img_id="755">
  <img class="tooltipImage" src="/img/comp/춘추관 방문 중간.jpeg" , color: "#e73921" , img_id="756">
  <img class="tooltipImage" src="/img/comp/제1차 국가경쟁력강화위원회의 중간.jpeg" , color: "#e73921" , img_id="757">
  <img class="tooltipImage" src="/img/comp/국립묘지 참배2 중간.jpeg" , color: "#e73921" , img_id="758">
  <img class="tooltipImage" src="/img/comp/오오타 아키히로 일본 공명당 총재 접견 중간.jpeg" , color: "#e73921" , img_id="759">
  <img class="tooltipImage" src="/img/comp/한우농가 방문 및 간담회 7(2008) 중간.jpeg" , color: "#e73921" , img_id="760">
  <img class="tooltipImage" src="/img/comp/제28주년 5.18 민주화운동 기념식 18(2008) 중간.jpeg" , color: "#e73921" , img_id="761">
  <img class="tooltipImage" src="/img/comp/쇠고기 고시 관련 중간.jpeg" , color: "#e73921" , img_id="762">
  <img class="tooltipImage" src="/img/comp/타임지 인터뷰 8(2008)  중간.jpeg" , color: "#e73921" , img_id="763">
  <img class="tooltipImage" src="/img/comp/쇠고기 고시 관련 관계장관회의 중간.jpeg" , color: "#e73921" , img_id="764">
  <img class="tooltipImage" src="/img/comp/G8 기후변화회의 중간.jpeg" , color: "#e73921" , img_id="765">
  <img class="tooltipImage" src="/img/comp/부시 美 대통령 내외 공식환영식 48(2008) 중간.jpeg" , color: "#e73921" , img_id="766">
  <img class="tooltipImage" src="/img/comp/박태환 선수 경기 응원 관람 2 중간.jpeg" , color: "#e73921" , img_id="767">
  <img class="tooltipImage" src="/img/comp/SK 제3고도화시설공장 준공식 8(2008) 중간.jpeg" , color: "#e73921" , img_id="768">
  <img class="tooltipImage" src="/img/comp/대통령과의 대화 '질문 있습니다' 4(2008)  중간.jpeg" , color: "#e73921" , img_id="769">
  <img class="tooltipImage" src="/img/comp/반기문 UN사무총장 접견(2008)2 중간.jpeg" , color: "#e73921" , img_id="770">
  <img class="tooltipImage" src="/img/comp/G20 금융정상회의 전체회의 14(2008) 중간.jpeg" , color: "#e73921" , img_id="771">
  <img class="tooltipImage" src="/img/comp/CNN 회견 22(2008) 중간.jpeg" , color: "#e73921" , img_id="772">
  <img class="tooltipImage" src="/img/comp/한-페루 공동언론발표 및 서훈식(2008) 중간.jpeg" , color: "#e73921" , img_id="773">
  <img class="tooltipImage" src="/img/comp/한-중 단독정상회담 7(2008) 중간.jpeg" , color: "#e73921" , img_id="774">
  <img class="tooltipImage" src="/img/comp/제1차 비상경제대책회의 중간.jpeg" , color: "#e73921" , img_id="775">
  <img class="tooltipImage" src="/img/comp/2009 안면도 꽃 박람회 개막식 22(2009) 중간.jpeg" , color: "#e73921" , img_id="776">
  <img class="tooltipImage" src="/img/comp/나로우주센터 준공식(2009) 중간.jpeg" , color: "#e73921" , img_id="777">
  <img class="tooltipImage" src="/img/comp/G8정상회의 23(2009) 중간.jpeg" , color: "#e73921" , img_id="778">
  <img class="tooltipImage" src="/img/comp/교황청 방문 9(2009) 중간.jpeg" , color: "#e73921" , img_id="779">
  <img class="tooltipImage" src="/img/comp/일하는 엄마와의 만남 18(2009)  중간.jpeg" , color: "#e73921" , img_id="780">
  <img class="tooltipImage" src="/img/comp/학자금 지원정책 현장발표회 5(2009) 중간.jpeg" , color: "#e73921" , img_id="781">
  <img class="tooltipImage" src="/img/comp/UN총회 기조연설 12(2009) 중간.jpeg" , color: "#e73921" , img_id="782">
  <img class="tooltipImage" src="/img/comp/한국토지주택공사 출범식 26(2009) 중간.jpeg" , color: "#e73921" , img_id="783">
  <img class="tooltipImage" src="/img/comp/신종플루 관련 국립의료원 방문 11(2009) 중간.jpeg" , color: "#e73921" , img_id="784">
  <img class="tooltipImage" src="/img/comp/청계천 산책 중간.jpeg" , color: "#e73921" , img_id="785">
  <img class="tooltipImage" src="/img/comp/BBC 회견 16(2010) 중간.jpeg" , color: "#e73921" , img_id="786">
  <img class="tooltipImage" src="/img/comp/FIFA 사무국 방문 3(2010) 중간.jpeg" , color: "#e73921" , img_id="787">
  <img class="tooltipImage" src="/img/comp/다보스포럼 단독특별연설 1(2010) 중간.jpeg" , color: "#e73921" , img_id="788">
  <img class="tooltipImage" src="/img/comp/UAE 아부다비 왕세자 면담 7(2010) 중간.jpeg" , color: "#e73921" , img_id="789">
  <img class="tooltipImage" src="/img/comp/바이든 미국 부통령 접견 2 중간.jpeg" , color: "#e73921" , img_id="790">
  <img class="tooltipImage" src="/img/comp/청와대 바자회 중간.jpeg" , color: "#e73921" , img_id="791">
  <img class="tooltipImage" src="/img/comp/제5회 전국동시지방선거 투표 15(2010) 중간.jpeg" , color: "#e73921" , img_id="792">
  <img class="tooltipImage" src="/img/comp/IOC 위원 접견 4(2010) 중간.jpeg" , color: "#e73921" , img_id="793">
  <img class="tooltipImage" src="/img/comp/토론토G20정상회의 공식 사진촬영 5(2010) 중간.jpeg" , color: "#e73921" , img_id="794">
  <img class="tooltipImage" src="/img/comp/남아공월드컵 축구대표팀 선수단 초청 오찬 41(2010) 중간.jpeg" , color: "#e73921" , img_id="795">
  <img class="tooltipImage" src="/img/comp/KTX 고속철도망 구축전략 보고회의 4(2010) 중간.jpeg" , color: "#e73921" , img_id="796">
  <img class="tooltipImage" src="/img/comp/ASEAN+3 정상회의 중간.jpeg" , color: "#e73921" , img_id="797">
  <img class="tooltipImage" src="/img/comp/부산-거제간 고속도로 개통식 1(2010)  중간.jpeg" , color: "#e73921" , img_id="798">
  <img class="tooltipImage" src="/img/comp/경춘선 복선전철 개통식 29(2010) 중간.jpeg" , color: "#e73921" , img_id="799">
  <img class="tooltipImage" src="/img/comp/UNESCO 사무총장 접견 1(2011) 중간.jpeg" , color: "#e73921" , img_id="800">
  <img class="tooltipImage" src="/img/comp/세계경제포럼 WEF총재 접견 3(2011) 중간.jpeg" , color: "#e73921" , img_id="801">
  <img class="tooltipImage" src="/img/comp/세계지도자상 수상 12(2011) 중간.jpeg" , color: "#e73921" , img_id="802">
  <img class="tooltipImage" src="/img/comp/미국의회 연설 7(2011) 중간.jpeg" , color: "#e73921" , img_id="803">
  <img class="tooltipImage" src="/img/comp/미국 국빈방문 공식환영식 15(2011) 중간.jpeg" , color: "#e73921" , img_id="804">
  <img class="tooltipImage" src="/img/comp/4대강 새물맞이 기념행사 15(2011) 중간.jpeg" , color: "#e73921" , img_id="805">
  <img class="tooltipImage" src="/img/comp/연평도 포격도발 1주기 관련 서방사령부 방문 6(2011) 중간.jpeg" , color: "#e73921" , img_id="806">
  <img class="tooltipImage" src="/img/comp/2012년 통일부 업무보고 5(2012) 중간.jpeg" , color: "#e73921" , img_id="807">
  <img class="tooltipImage" src="/img/comp/글로벌 코리아 2012 개회식 및 개막좌담회 3(2012) 중간.jpeg" , color: "#e73921" , img_id="808">
  <img class="tooltipImage" src="/img/comp/2012 여수엑스포 개막식 5(2012) 중간.jpeg" , color: "#e73921" , img_id="809">
  <img class="tooltipImage" src="/img/comp/_김용_세계은행 총재 접견 3(2012) 중간.jpeg" , color: "#e73921" , img_id="810">
  <img class="tooltipImage" src="/img/comp/제18대 대통령선거 투표내외분 5(2012) 중간.jpeg" , color: "#e73921" , img_id="811">
  <img class="tooltipImage" src="/img/comp/박근혜 제18대 대통령 당선인 접견 1 중간.jpeg" , color: "#e73921" , img_id="812">
  <img class="tooltipImage" src="/img/comp/2013 평창 동계스페셜올림픽 개막식 중간.jpeg" , color: "#e73921" , img_id="813">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="814">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="815">
  <img class="tooltipImage" src="/img/comp/박근혜이미지 중간.jpeg" , color: "#e73921" , img_id="816">
  <img class="tooltipImage" src="/img/comp/농축산물 유통 현장 방문(2013) 중간.jpeg" , color: "#e73921" , img_id="817">
  <img class="tooltipImage" src="/img/comp/천안함 용사 3주기 추모식(2013) 중간.jpeg" , color: "#e73921" , img_id="818">
  <img class="tooltipImage" src="/img/comp/박근혜 대통령 미국 방문_반기문 UN사무총장 면담(2013) 중간.jpeg" , color: "#e73921" , img_id="819">
  <img class="tooltipImage" src="/img/comp/박근혜 대통령 미국 방문_한미동맹 60주년 기념 만찬(2013)1 중간.jpeg" , color: "#e73921" ,
    img_id="820">
  <img class="tooltipImage" src="/img/comp/6.25전쟁 63주년 국군 및 UN군 참전유공자 위로연(2013)1 중간.jpeg" , color: "#e73921" ,
    img_id="821">
  <img class="tooltipImage" src="/img/comp/박근혜 대통령 중국 방문_양국정상 청년대표단 접견 2 중간.jpeg" , color: "#e73921" , img_id="822">
  <img class="tooltipImage" src="/img/comp/제68주년 광복절 경축식(2013)1 중간.jpeg" , color: "#e73921" , img_id="823">
  <img class="tooltipImage" src="/img/comp/국제기능올림픽 선수단 초청 오찬(2013)3 중간.jpeg" , color: "#e73921" , img_id="824">
  <img class="tooltipImage" src="/img/comp/대국민담화(2013) 중간.jpeg" , color: "#e73921" , img_id="825">
  <img class="tooltipImage" src="/img/comp/건군 65주년 국군의 날 기념식(2013) 중간.jpeg" , color: "#e73921" , img_id="826">
  <img class="tooltipImage" src="/img/comp/신년 구상 발표 및 기자회견(2014) 중간.jpeg" , color: "#e73921" , img_id="827">
  <img class="tooltipImage" src="/img/comp/2014 소치 동계올림픽 D-30 태릉선수촌 격려방문(2014)1 중간.jpeg" , color: "#e73921" ,
    img_id="828">
  <img class="tooltipImage" src="/img/comp/2014 헤이그 핵안보정상회의 참석_네덜란드 국왕과의 오찬(2014)1 중간.jpeg" , color: "#e73921" ,
    img_id="829">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="830">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="831">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="832">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="833">
  <img class="tooltipImage" src="/img/comp/핵심 국정과제(브랜드과제) 점검회의(2014)1 중간.jpeg" , color: "#e73921" , img_id="834">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="835">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="836">
  <img class="tooltipImage" src="/img/comp/정유라 이화여대 특혜 입학 의혹 제기 중간.jpeg" , color: "#e73921" , img_id="837">
  <img class="tooltipImage" src="/img/comp/정유라 이화여대 특혜 입학 의혹 제기2 중간.jpeg" , color: "#e73921" , img_id="838">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="839">
  <img class="tooltipImage" src="/img/comp/박근혜 개헌론 중간.jpeg" , color: "#e73921" , img_id="840">
  <img class="tooltipImage" src="/img/comp/1차 대국민담화 중간.jpeg" , color: "#e73921" , img_id="841">
  <img class="tooltipImage" src="/img/comp/최순실 구속2 중간.jpeg" , color: "#e73921" , img_id="842">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="843">
  <img class="tooltipImage" src="/img/comp/역대 최저 중간.jpeg" , color: "#e73921" , img_id="844">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="845">
  <img class="tooltipImage" src="/img/comp/1차 국회청문회 중간.jpeg" , color: "#e73921" , img_id="846">
  <img class="tooltipImage" src="/img/comp/박근혜 2차 국정조사-김기춘 중간.jpeg" , color: "#e73921" , img_id="847">
  <img class="tooltipImage" src="/img/comp/‘박근혜 대통령 탄핵소추안’ 국회 본회의 보고 중간.jpeg" , color: "#e73921" , img_id="848">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="849">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="850">
  <img class="tooltipImage" src="/img/comp/문재인 1 중간.jpeg" , color: "#5e83ba" , img_id="851">
  <img class="tooltipImage" src="/img/comp/국립서울현충원참배 (2017) 중간.jpeg" , color: "#5e83ba" , img_id="852">
  <img class="tooltipImage" src="/img/comp/사저앞시민들과의만남(2017) 중간.jpeg" , color: "#5e83ba" , img_id="853">
  <img class="tooltipImage" src="/img/comp/찾아가는 대통령1. _공공부문 비정규직 제로시대_ 중간.jpeg" , color: "#5e83ba" , img_id="854">
  <img class="tooltipImage" src="/img/comp/마크맨 기자단 북한산 산행 중간.jpeg" , color: "#5e83ba" , img_id="855">
  <img class="tooltipImage" src="/img/comp/국가안전보장회의(NSC) 상임위 참석 1 중간.jpeg" , color: "#5e83ba" , img_id="856">
  <img class="tooltipImage" src="/img/comp/인사발표 중간.jpeg" , color: "#5e83ba" , img_id="857">
  <img class="tooltipImage" src="/img/comp/문재인 이낙연 총리 임명장 중간.jpeg" , color: "#5e83ba" , img_id="858">
  <img class="tooltipImage" src="/img/comp/미국순방 (2017) 중간.jpeg" , color: "#5e83ba" , img_id="859">
  <img class="tooltipImage" src="/img/comp/문재인 G20 2017 중간.jpeg" , color: "#5e83ba" , img_id="860">
  <img class="tooltipImage" src="/img/comp/문재인 제 33회 국무회의 중간.jpeg" , color: "#5e83ba" , img_id="861">
  <img class="tooltipImage" src="/img/comp/주요 기업인과의 대화(2017)2 중간.jpeg" , color: "#5e83ba" , img_id="862">
  <img class="tooltipImage" src="/img/comp/건강보험 보장 강화 현장 방문 중간.jpeg" , color: "#5e83ba" , img_id="863">
  <img class="tooltipImage" src="/img/comp/CNA 외신 인터뷰2 중간.jpeg" , color: "#5e83ba" , img_id="864">
  <img class="tooltipImage" src="/img/comp/문재인 한-중 수교 25주년 중간.jpeg" , color: "#5e83ba" , img_id="865">
  <img class="tooltipImage" src="/img/comp/2018 대통령 신년 기자회견- 내 삶이 달라집니다!  중간.jpeg" , color: "#5e83ba" , img_id="866">
  <img class="tooltipImage" src="/img/comp/찾아가는 대통령2. _국공립 어린이집 방문_ 중간.jpeg" , color: "#5e83ba" , img_id="867">
  <img class="tooltipImage" src="/img/comp/일자리나누기 공동선언식 현장 방문 중간.jpeg" , color: "#5e83ba" , img_id="868">
  <img class="tooltipImage" src="/img/comp/2018 평창동계올림픽 IOC 총회 개회식 중간.jpeg" , color: "#5e83ba" , img_id="869">
  <img class="tooltipImage" src="/img/comp/북 고위급대표단 접견2 중간.jpeg" , color: "#5e83ba" , img_id="870">
  <img class="tooltipImage" src="/img/comp/2.28 민주운동 기념식  중간.jpeg" , color: "#5e83ba" , img_id="871">
  <img class="tooltipImage" src="/img/comp/평창 동계 패럴림픽 개막식 중간.jpeg" , color: "#5e83ba" , img_id="872">
  <img class="tooltipImage" src="/img/comp/부산항 미래비전 선포식1 중간.jpeg" , color: "#5e83ba" , img_id="873">
  <img class="tooltipImage" src="/img/comp/남북정상회담 준비위원회 제2차 회의2 중간.jpeg" , color: "#5e83ba" , img_id="874">
  <img class="tooltipImage" src="/img/comp/신임 한국은행 총재 임명(2018) 중간.jpeg" , color: "#5e83ba" , img_id="875">
  <img class="tooltipImage" src="/img/comp/남북 단독회담 및 공동선언문 서명식(4월) 중간.jpeg" , color: "#5e83ba" , img_id="876">
  <img class="tooltipImage" src="/img/comp/남북평화 협력기원 남측예술단 초청 오찬2 중간.jpeg" , color: "#5e83ba" , img_id="877">
  <img class="tooltipImage" src="/img/comp/신혼부부 및 청년 주거대책 발표2 중간.jpeg" , color: "#5e83ba" , img_id="878">
  <img class="tooltipImage" src="/img/comp/MOU교환식 및 공동언론발표(2018) 중간.jpeg" , color: "#5e83ba" , img_id="879">
  <img class="tooltipImage" src="/img/comp/문재인 남북정상회담3 중간.jpeg" , color: "#5e83ba" , img_id="880">
  <img class="tooltipImage" src="/img/comp/한미 FTA 관련 서명식4 중간.jpeg" , color: "#5e83ba" , img_id="881">
  <img class="tooltipImage" src="/img/comp/영국 BBC방송 인터뷰1 중간.jpeg" , color: "#5e83ba" , img_id="882">
  <img class="tooltipImage" src="/img/comp/프랑스 대통령 환담2 중간.jpeg" , color: "#5e83ba" , img_id="883">
  <img class="tooltipImage" src="/img/comp/이탈리아 대통령 면담2 중간.jpeg" , color: "#5e83ba" , img_id="884">
  <img class="tooltipImage" src="/img/comp/앙헬 구리아 OECD 사무총장 접견2 중간.jpeg" , color: "#5e83ba" , img_id="885">
  <img class="tooltipImage" src="/img/comp/G20 정상회의 개회식1 중간.jpeg" , color: "#5e83ba" , img_id="886">
  <img class="tooltipImage" src="/img/comp/청와대와 함께 메리크리스마스 중간.jpeg" , color: "#5e83ba" , img_id="887">
  <img class="tooltipImage" src="/img/comp/성수동 수제화 거리 방문 및 청년창업자 격려 중간.jpeg" , color: "#5e83ba" , img_id="888">
  <img class="tooltipImage" src="/img/comp/문재인 MBC 이용마 기자 중간.jpeg" , color: "#5e83ba" , img_id="889">
  <img class="tooltipImage" src="/img/comp/반기문 전 UN 사무총장 중간.jpeg" , color: "#5e83ba" , img_id="890">
  <img class="tooltipImage" src="/img/comp/문재인 칠성종합시장 방문1 중간.jpeg" , color: "#5e83ba" , img_id="891">
  <img class="tooltipImage" src="/img/comp/FIFA U-20 국가대표 선수단 초청 중간.jpeg" , color: "#5e83ba" , img_id="892">
  <img class="tooltipImage" src="/img/comp/기생충관람 중간.jpeg" , color: "#5e83ba" , img_id="893">
  <img class="tooltipImage" src="/img/comp/전국 경제 투어- 삼성디스플레이 신규 투자 및 협약식 중간.jpeg" , color: "#5e83ba" , img_id="894">
  <img class="tooltipImage" src="/img/comp/동아시아정상회의(EAS) 오찬1  중간.jpeg" , color: "#5e83ba" , img_id="895">
  <img class="tooltipImage" src="/img/comp/우한폐렴 중간.jpeg" , color: "#5e83ba" , img_id="896">
  <img class="tooltipImage" src="/img/comp/코로나19 예방접종 계획 수립 중간.jpeg" , color: "#5e83ba" , img_id="897">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="898">
  <img class="tooltipImage" src="/img/comp/집무실 용산 이전 기자회견 중간.jpeg" , color: "#e73921" , img_id="899">
  <img class="tooltipImage" src="/img/comp/지하철 시위 잠정 중단 중간.jpeg" , color: "#e73921" , img_id="900">
  <img class="tooltipImage" src="/img/comp/집무실 이전비 360 억 의결 중간.jpeg" , color: "#e73921" , img_id="901">
  <img class="tooltipImage" src="/img/comp/마스크 제외 거리두기 전면 해제 중간.jpeg" , color: "#e73921" , img_id="902">
  <img class="tooltipImage" src="/img/comp/유퀴즈 중간.jpeg" , color: "#e73921" , img_id="903">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="904">
  <img class="tooltipImage" src="/img/comp/인수위, 에너지정책 5대 과제 제시 중간.jpeg" , color: "#e73921" , img_id="905">
  <img class="tooltipImage" src="/img/comp/수사권 축소 중간.jpeg" , color: "#e73921" , img_id="906">
  <img class="tooltipImage" src="/img/comp/청와대 개방 중간.jpeg" , color: "#e73921" , img_id="907">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="908">
  <img class="tooltipImage" src="/img/comp/첫 국회 시정연설 중간.jpeg" , color: "#e73921" , img_id="909">
  <img class="tooltipImage" src="/img/comp/제 8회 동시지방선거 중간.jpeg" , color: "#e73921" , img_id="910">
  <img class="tooltipImage" src="/img/comp/도발 중간.jpeg" , color: "#e73921" , img_id="911">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="912">
  <img class="tooltipImage" src="/img/comp/누리호 발사 중간.jpeg" , color: "#e73921" , img_id="913">
  <img class="tooltipImage" src="/img/comp/6월물가 중간.jpeg" , color: "#e73921" , img_id="914">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="915">
  <img class="tooltipImage" src="/img/comp/문자메시지 중간.jpeg" , color: "#e73921" , img_id="916">
  <img class="tooltipImage" src="/img/comp/광화문광장 재개장 중간.jpeg" , color: "#e73921" , img_id="917">
  <img class="tooltipImage" src="/img/comp/김건희 특별법 중간.jpeg" , color: "#e73921" , img_id="918">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="919">
  <img class="tooltipImage" src="/img/comp/새만금 재생에너지 비전 선포식 중간.jpeg" , color: "#e73921" , img_id="920">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="921">
  <img class="tooltipImage" src="/img/comp/판교 데이터센터 화재 중간.jpeg" , color: "#e73921" , img_id="922">
  <img class="tooltipImage" src="/img/comp/'대장동 의혹' 특검 촉구 중간.jpeg" , color: "#e73921" , img_id="923">
  <img class="tooltipImage" src="/img/comp/대통령실 새 로고 공개 중간.jpeg" , color: "#e73921" , img_id="924">
  <img class="tooltipImage" src="/img/comp/이태원 핼러윈 참사 중간.jpeg" , color: "#e73921" , img_id="925">
  <img class="tooltipImage" src="/img/comp/울릉도 공습경보 발령 중간.jpeg" , color: "#e73921" , img_id="926">
  <img class="tooltipImage" src="/img/comp/MBC 취재진 전용기 탑승 불허 통보 중간.jpeg" , color: "#e73921" , img_id="927">
  <img class="tooltipImage" src="/img/comp/한국 대표팀 월드컵 16강 진출 중간.jpeg" , color: "#e73921" , img_id="928">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="929">
  <img class="tooltipImage" src="/img/comp/중국, 한국인 단기비자 발급 중단 중간.jpeg" , color: "#e73921" , img_id="930">
  <img class="tooltipImage" src="/img/comp/'김건희 의혹 TF' 출범 중간.jpeg" , color: "#e73921" , img_id="931">
  <img class="tooltipImage" src="/img/comp/이재명 구속영장 청구 중간.jpeg" , color: "#e73921" , img_id="932">
  <img class="tooltipImage" src="/img/comp/정순신 중간.jpeg" , color: "#e73921" , img_id="933">
  <img class="tooltipImage" src="/img/comp/민주당, 김건희 특검법 ’발의' 중간.jpeg" , color: "#e73921" , img_id="934">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="935">
  <img class="tooltipImage" src="/img/comp/한일정상회담 중간.jpeg" , color: "#e73921" , img_id="936">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="937">
  <img class="tooltipImage" src="/img/comp/이재명 불구속기소 중간.jpeg" , color: "#e73921" , img_id="938">
  <img class="tooltipImage" src="/img/comp/재외공관장 청와대 초청 만찬 중간.jpeg" , color: "#e73921" , img_id="939">
  <img class="tooltipImage" src="/img/comp/도감청 중간.jpeg" , color: "#e73921" , img_id="940">
  <img class="tooltipImage" src="/img/comp/가짜뉴스 중간.jpeg" , color: "#e73921" , img_id="941">
  <img class="tooltipImage" src="/img/comp/'전세사기 특별법' 추진 중간.jpeg" , color: "#e73921" , img_id="942">
  <img class="tooltipImage" src="/img/comp/'워싱턴 선언' 발표 중간.jpeg" , color: "#e73921" , img_id="943">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="944">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="945">
  <img class="tooltipImage" src="/img/comp/국가보훈부 승격 중간.jpeg" , color: "#e73921" , img_id="946">
  <img class="tooltipImage" src="/img/comp/서울대, 조국 전 장관 파면 중간.jpeg" , color: "#e73921" , img_id="947">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="948">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="949">
  <img class="tooltipImage" src="/img/comp/교권 강화 입법 추진 중간.jpeg" , color: "#e73921" , img_id="950">
  <img class="tooltipImage" src="/img/comp/새만금 잼버리 개영식 참석 중간.jpeg" , color: "#e73921" , img_id="951">
  <img class="tooltipImage" src="/img/comp/이재명 단식 중간.jpeg" , color: "#e73921" , img_id="952">
  <img class="tooltipImage" src="/img/comp/'대장동 관련 허위 보도' JTBC 압수수색 중간.jpeg" , color: "#e73921" , img_id="953">
  <img class="tooltipImage" src="/img/comp/한국은행 기준금리 6연속 동결 중간.jpeg" , color: "#e73921" , img_id="954">
  <img class="tooltipImage" src="/img/comp/'자녀 학폭 의혹' 김승희 의전비서관 사퇴 중간.jpeg" , color: "#e73921" , img_id="955">
  <img class="tooltipImage" src="/img/comp/가라 이미지 중간.jpeg" , color: "#e73921" , img_id="956">
  <img class="tooltipImage" src="/img/comp/방통위원장 탄핵안 철회 중간.jpeg" , color: "#e73921" , img_id="957">
  <img class="tooltipImage" src="/img/comp/KBS 뉴스 앵커 및 보도본부장 등 60명 인사 교체 중간.jpeg" , color: "#e73921" , img_id="958">
  <img class="tooltipImage" src="/img/comp/장모 잔고증명 위조 징역 실형 확정 중간.jpeg" , color: "#e73921" , img_id="959">
`
}

function toggleDiv3() {
  const div3 = document.querySelector(".toast");
  div3.classList.toggle("show");
  div3.style.transition = "bottom 0.5s ease-in-out";
}