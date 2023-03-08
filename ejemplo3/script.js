d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [ //marcas del plot
      Plot.barY(data, { //elijo la marca punto para representar cada identidad
        x: 'nacionalidad', 
        y: 'eva_mision_hs',
        fill: 'genero',
        sort: 'nacionalidad'
      }),
    ],
    x: {
      domain: d3.sort(data, (a, b) => d3.descending(a.eva_mision_hs, b.eva_mision_hs)).map(d => d.nacionalidad),
    },
    marginLeft: 70,
    width: 1100,
    height: 500,
    color: {
      legend:true,
    }
    
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})

