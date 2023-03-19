d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Reino Unido', 'Francia', 'Canada', 'Alemania'].includes(d.nacionalidad));
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart

    marks: [ 
      Plot.text(['Horas de misión (eva) por nacionalidad'], {
        frameAnchor:"top", 
        fill: "black",
        fontSize: 18,},),//marcas del plot
      Plot.barY(data, Plot.groupX({y: "sum"}, {x:"nacionalidad", y: "eva_mision_hs", fill: d => d.nacionalidad === "EE.UU." ? "#000073" : (d.nacionalidad === "U.S.S.R/Rusia" ? "#990000" : "#D1C9C8"),})),
      Plot.axisX({labelAnchor: "right", 
        labelOffset: 18, 
        label: "Nacionalidad",
        style:{fontSize: 10, color: "black",},
      }),
      Plot.text(data, {
        x: "nacionalidad",
        y: "sum",
        text: "sum",
        fontWeight: "bold",
        fill: "black",
        filter: d => d.nacionalidad === "EE.UU.", x: "nacionalidad", y: "eva_mision_hs", text: d => (`${d.sum}`), dy: -300}),
      Plot.text(data, {
        x: "nacionalidad",
        y: "sum",
        text: "sum",
        fontWeight: "bold",
        fill: "black",
        filter: d => d.nacionalidad === "U.S.S.R/Rusia", x: "nacionalidad", y: "eva_mision_hs", text: d => (`${d.sum}`), dy: -140})
    ],
    x: {
      domain: d3.sort(data, (a, b) => d3.descending(a.sum, b.sum)).map(d => d.nacionalidad),
    },
    y: {
      labelOffset: 120,
      label: "Hrs de misión (eva)",
      grid: true,
      domain: [0,700]
    },
    width: 1300,
    height: 400,
    marginLeft: 160,
    marginRight: 70,
    marginTop:30,
    marginBottom: 50,
    line: true,
    nice: true,
    zero: true,
    insetTop: 0,
    style:{
      color: "grey",
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
