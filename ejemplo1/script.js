d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [ //marcas del plot
      Plot.barX(data, { //elijo la marca punto para representar cada identidad
        x: 'mision_hs', y: 'ocupacion', fill: 'ocupacion', stroke: 'ocupacion'
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      labelOffset: 200,
      label: 'Ocupación',
      fontSize: 100,
    },
    x: {
      grid: true,
      labelOffset:40,
      label: 'Misión en horas'
    },
    style:{
      fontFamily: 'serif',
      fontSize: 14,
      //background: 'hsl(0,100%,50%)'
      color: 'black',
      padding: '100px',
    },
    width: 700,
    height: 500,
    marginLeft: 200,
    marginBottom: 200,
    marginRight: 70,
    color:{
      scheme: 'orrd'
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
