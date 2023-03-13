d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart

    marks: [ //marcas del plot
      Plot.areaY(data, { //elijo la marca punto para representar cada identidad
        x: 'nacionalidad', 
        y: 'eva_mision_hs',
        fill: 'nacionalidad',
        stroke: 'nacionalidad',
        sort: 'nacionalidad',
      }),
    ],
    width: 1500,
    height: 300,
    marginLeft: 150,
    line: true,
    nice: true,
    zero: true,
    grid: true,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
