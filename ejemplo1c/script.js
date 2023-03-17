d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [
      Plot.text(['Misión en horas de acuerdo al género'], {frameAnchor:"top", fontSize: 18,},),//marcas del plot //marcas del plot
      Plot.dot(data, { //elijo la marca punto para representar cada identidad
        x: 'mision_hs', y: 'genero', fill: 'genero', stroke: 'genero',
      }),
    ],
    y: {
      grid:true,
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
      label: 'Género',
      labelOffset: 110,
    },
    x: {
      grid: true,
      label: 'Misión en horas',

    },
    color:{
      scheme:'purd'
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize: 13,
      background: 'hsl(4, 73%, 89%)',
      color: 'black',
      padding: '100px',
    },
    height: 300,
    width: 900,
    marginLeft: 140,
    marginRight: 50,
    marginBottom: 50,
    marginTop: 10,

  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
