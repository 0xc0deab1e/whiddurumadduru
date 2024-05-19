const data = {
    raw: [
      { header: "sp|Q9W678|P53_BARBU Cellular tumor antigen p53 OS=Barbus barbus GN=tp53 PE=2 SV=1", seq: "MAESQEFAELWERNLISTQEAGTCWELINDEYLPSSFDPNIFDNVLTEQP…LELSDVVPPSEMDRYRQKLLTKGKKKDGQTPEPKRGKKLMVKDEKSDSD", seq_len: 369, seq_name: "P53_BARBU", seq_full_str: "MAESQEFAELWERNLISTQEAGTCWELINDEYLPSSFDPNIFDNVLTEQP…GQTPEPKRGKKLMVKDEKSDSD---------------------------", seq_full: Array(2) },
      { header: "sp|Q29537|P53_CANFA Cellular tumor antigen p53 OS=Canis familiaris GN=TP53 PE=2 SV=2", seq: "MEESQSELNIDPPLSQETFSELWNLLPENNVLSSELCPAVDELLLPESVV…NEALELKDAQSGKEPGGSRAHSSHLKAKKGQSTSRHKKLMFKREGLDSD", seq_len: 381, seq_name: "P53_CANFA", seq_full_str: "MEESQSELNIDPPLSQETFSELWNLLPENNVLSSELCPAVDELLLPESVV…GGSRAHSSHLKAKKGQSTSRHKKLMFKREGLDSD---------------", seq_full: Array(2) },
      // 나머지 raw 데이터
    ],
    derive: [
      { n: "P53_BARBU", k: 0, v: "M" },
      { n: "P53_BARBU", k: 1, v: "A" },
      // 나머지 derive 데이터
    ],
    total_len: 2
  };

const data_viz = {
    heatmap: [
      { n: "P53_BARBU", k: 0, v: "M", mode: "M", "vega_id": 2 },
      { n: "P53_BARBU", k: 1, v: "A", mode: "E", "vega_id": 3 },
      // 나머지 heatmap 데이터
    ],
    bar: [
      { k: 0, v: "M", cnt: 31, "Conversion Rate": 0.9117647058823529, "vega_id": 13862 },
      { k: 1, v: "E", cnt: 24, "Conversion Rate": 0.7058823529411765, "vega_id": 13863 },
      // 나머지 bar 데이터
    ]
  };

const brush = vl.selectInterval().encodings('x').init({ x: [0, 40] });
const hover = vl.selectSingle('hover').on('mouseover').encodings("x").nearest(true).clear("mouseout");
const proteinList = Array.from(new Set(data_viz.heatmap.map(d => d.n)));

const scale = {
    domain: Array.from(new Set(data_viz.heatmap.map(d => d.v))),
    range: d3.schemeSet3.concat(d3.schemeSet2).concat(['#ddd'])
}

const heatmap = vl
    .data(data_viz.heatmap)
    .layer(
        vl.markRect()
            .params(hover)
            .encode(
                vl.y().fieldN('n').axis({ title: null }),
                vl.x().fieldN('k').axis({ domain: false, title: null, values: d3.range(0, data.total_len, 20), labelAngle: 0, orient: 'top' }),
                vl.color().fieldN('v').scale(scale).legend(null),

            ),
        vl.markText({ align: 'center' })
            .encode(
                vl.y().fieldN('n'),
                vl.x().fieldN('k'),
                vl.text().fieldN('v'),
                vl.tooltip([{ field: 'n', title: 'Protein' }, { field: 'k', title: 'Position' },
                { field: 'v', title: 'Sequence' }, { field: 'mode', title: 'Mode' }])
            ),
    )
    .width(810)
    .height(600)
    .transform(vl.filter(brush))


const miniMap = vl.markTick()
    .data(data_viz.heatmap)
    .encode(
        vl.x().fieldQ('k').axis(false),
        vl.y().fieldN('n').axis(false),
        vl.color().fieldN('v').legend(null),
        vl.color().value('lightgray')
            .if(brush, vl.color().fieldN('v').scale(scale).legend(null)),
    )
    .height(150)
    .params(brush)
    .width(250)


const barChart = vl.markBar()
    .data(data_viz.bar)
    .encode(
        vl.x().fieldO('k').axis({ title: null, values: d3.range(0, data.total_len, 20), labelAngle: 0 }),
        vl.y().fieldQ('Conversion Rate'),
        vl.color().fieldQ('Conversion Rate').scale({ scheme: 'yellowgreenblue' }).legend(null),
        vl.tooltip([{ field: 'Conversion Rate', format: '.2f' }, { field: 'k', title: 'Position' }])
    )
    .height(150)
    .width(500)
    .transform(vl.filter(brush))

vl.vconcat(vl.hconcat(miniMap, barChart), heatmap)
    .config({ view: { stroke: 'transparent' } })
    .render();
