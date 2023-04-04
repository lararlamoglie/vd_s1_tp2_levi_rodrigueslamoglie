d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Alemania', 'China', 'Reino Unido', 'Italia', 'Canada'].includes(d.nacionalidad));
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    x:{
      round: true,
      label: "",
      tickFormat: "",
    },
    y:{
    label: "Cantidad de \n astronautas",
      grid: true,
      round: true,
      labelOffset : 90,
      domain: [0,30],
      type: "linear",
    },
    marks: [ 
      Plot.barY(data, Plot.binY({y: "count"}, {
        x:"anio_mision", 
        fill: d => d.nacionalidad === "EE.UU." ? "#ffa71a" : (d.nacionalidad === "U.S.S.R/Rusia" ? "#f5009b" : "#00dbeb"),
        stroke: d => d.nacionalidad === "EE.UU." ? "#ffa71a" : (d.nacionalidad === "U.S.S.R/Rusia" ? "#f5009b" : "#00dbeb"),
        round: true,
        //fill: "nacionalidad",
        //stroke: "nacionalidad",
        padding: "20px",
      })),
    ],
    width: 800,
    height: 380,
    marginLeft: 100,
    marginRight: 0,
    marginTop: 10,
    marginBottom: 50,
    padding: 0.2,
    line: true,
    nice: false,
    zero: true,
    insetTop: 0,
    aspectRatio: 2000,
    style:{
      color: "white",
      background: "hsl(0, 100%, 0%)",
      fontSize: 10,
    },
    color:{
      range:["#a323d1","#00dbeb", "#ffa71a","#f5009b"],
      legend: false,
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
