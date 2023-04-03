d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
      y: {
        grid: true
      },
      marks: [
        Plot.rectY(data, Plot.binX({y: "count"}, {x: "edad_mision", fill:'genero'})),
        Plot.ruleY([0])
      ]
    })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})

