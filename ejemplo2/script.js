d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Reino Unido', 'Francia', 'Canada'].includes(d.nacionalidad));
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    x:{
      round: true,
      label: "Ocupación",
    },
    y:{
      label: "Cantidad astronautas",
      grid: true,
      round: true,
    },
    marks: [ 
      Plot.barY(data, Plot.binY({y: "count"}, {
        x:"ocupacion", 
        fill: d => d.nacionalidad === "EE.UU." ? "#000073" : (d.nacionalidad === "U.S.S.R/Rusia" ? "#990000" : "#D1C9C8"),
        stroke: d => d.nacionalidad === "EE.UU." ? "#000073" : (d.nacionalidad === "U.S.S.R/Rusia" ? "#990000" : "#D1C9C8"),

      })),
      Plot.ruleY([0]),
    ],
    width: 700,
    height: 500,
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
