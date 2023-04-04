d3.csv('./astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [ //marcas del plot
      Plot.dot(data, { //elijo la marca punto para representar cada identidad
        x: 'edad_mision', 
        y: 'eva_mision_hs',
        fill: 'status',
        sort: 'status',
        stroke: 'status', 
      }),
    ],
    width: 5000,
    height: 100,
    marginLeft: 150,
    line: false,
    nice: true,
    zero: true,
    grid: true,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
