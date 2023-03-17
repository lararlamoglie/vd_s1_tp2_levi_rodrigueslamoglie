d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart

    marks: [ 
      Plot.text(['Evaluación horas de misión por nacionalidad'], {frameAnchor:"top", fontSize: 18,},),//marcas del plot
      Plot.barY(data, { //elijo la marca punto para representar cada identidad
        x: 'nacionalidad', 
        y: 'eva_mision_hs',
        fill: 'nacionalidad',
        stroke: 'nacionalidad',
        sort: 'nacionalidad',
      }),
    ],
    x: {
      domain: d3.sort(data, (a, b) => d3.descending(a.eva_mision_hs, b.eva_mision_hs)).map(d => d.nacionalidad),
      label: 'Nacionalidad',
      grid:true,
      labelOffset: 40,
    },
    y: {
      grid: true,
      labelOffset: 155,
      label: "Evaluación de misión en hrs" 
    },
    width: 1300,
    height: 300,
    marginLeft: 160,
    marginRight: 200,
    marginTop:10,
    marginBottom: 100,
    line: true,
    nice: true,
    zero: true,
    grid: true,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
