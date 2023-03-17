d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [ //marcas del plot
      Plot.dot(data, { //elijo la marca punto para representar cada identidad
        x: 'mision_hs', y: 'genero', fill: 'genero', stroke: 'genero',
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
    },
    x: {
      grid: true,
    },
    color:{
      scheme:'purd',
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize: 13,
      background: 'hsl(317, 30%, 89%)',
      color: 'black',
    },
    height: 300,
    width: 1500,
    marginLeft: 150
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
