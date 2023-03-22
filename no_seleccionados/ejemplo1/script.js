d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      labelOffset: 180,
      //grid: true,
      label: 'Ocupación',
      fontSize: 100,
    },
    marks: [ //marcas del plot
      //Plot.text(['Horas de misión por ocupación'], {frameAnchor: "top", fontSize: 18,},),
      Plot.axisX({anchor: "bottom", 
      //tickFormat: "", 
      labelOffset: 17,
      tickSize: 5,}),
      Plot.barX(data, Plot.groupY({x: "sum"}, {x: "mision_hs", 
      y: "ocupacion", 
      fill:'ocupacion', 
      sort: {y: "x", reverse:false},})),
      Plot.ruleX[0],
      Plot.gridX({insetTop:80,}),
    ],
    
    x:{domain:[0,300000], grid:true, tickFormat:"", type: "linear", grid: true, labelOffset:40, label: 'Misión en horas',
    },
    style:{
      fontFamily: 'serif',
      fontSize: 12,
      //background: 'hsl(0,100%,50%)'
      color: 'black',
      padding: '100px',
    },
    width: 900,
    height: 450,
    marginLeft: 200,
    marginBottom: 200,
    marginTop: 10,
    marginRight: 130,
    insetTop: 0,
    
    color:{
      type: "categorical",
      scheme: 'blues',
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})