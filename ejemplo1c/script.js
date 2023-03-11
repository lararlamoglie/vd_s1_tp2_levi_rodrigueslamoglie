d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [ //marcas del plot
      Plot.dot(data, { //elijo la marca punto para representar cada identidad
        x: 'mision_hs', y: 'ocupacion', fill: 'ocupacion', stroke: 'ocupacion'
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
    },
    x: {
      grid: true,
    },
    height: 300,
    marginLeft: 150
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
