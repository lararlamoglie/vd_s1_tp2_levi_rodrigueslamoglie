d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
      y: {
        grid: true,
        labelOffset: 25,
        label: "Edad" 
      },
      x:{
        tickFormat: "",
        type: "linear",
        label: "Misión en horas (eva)",
      },
      marks: [
        Plot.text(['Horas de misión por edad'], {frameAnchor:"top", fontSize: 16,},),
        Plot.dot(data, Plot.binX({r: "count"}, {x: 'eva_mision_hs', y:'edad_mision', fill:'edad_mision'})),
        Plot.axisX(d3.ticks(0,40,10),{anchor: "bottom", 
        tickFormat: "", 
        labelOffset: 35,
        tickSize: 5,
      }),
        Plot.axisY(d3.ticks(32,60,9), {labelOffset: 20,}),
      ],
      color:{
        type: "categorical", 
        scheme: 'turbo',
        nice: true, 
      },
      width: 600,
      height: 500,
      marginTop: 20,
      marginBottom: 50,
      marginLeft: 50,
      marginRight: 50,
      insetLeft: 5,
      insetBottom: 5,
      insetTop: 40,
      style:{
        fontFamily: "sans-serif",
        fontSize: 11,
        //background: "hsl(190, 27%, 85%)",
        color: "black",
      }

    })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})

