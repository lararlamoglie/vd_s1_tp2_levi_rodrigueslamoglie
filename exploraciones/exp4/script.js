d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    marks: [
      //Plot.text(['Horas de misión en función de ocupación y género'], {frameAnchor:"top", fontSize: 16,}, ),//marcas del plot //marcas del plot
      Plot.dot(data, { //elijo la marca punto para representar cada identidad
        x: 'mision_hs', y: 'ocupacion', r: 3.5,
        //stroke: 'genero',
        fill: "genero",
      }),
    ],
    y: {
      //grid:true,
      //domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
      label: '',
      labelOffset: 200,
    },
    x: {
      grid: true,
      label: 'Misión en horas',
      labelOffset: 18,

    },
    color:{
      type: "categorical",
      scheme:'prgn',
      legend: true,
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize: 12,
      background: 'hsl(111, 26%, 87%)',
      color: 'black',
      padding: '100px',
    },
    height: 250,
    width: 800,
    marginLeft: 170,
    marginRight: 110,
    marginBottom:20,
    marginTop: 0,
    insetTop: 0,

  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
