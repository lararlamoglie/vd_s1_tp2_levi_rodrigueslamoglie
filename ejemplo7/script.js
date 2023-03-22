d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let datafemale = data.filter(
    d => d.genero === "femenino"
  )

  let datamasc = data.filter(
    d => d.genero === "masculino"
  )
  
  let chart = Plot.plot({
    inset: 10,
    grid: true,
    x: {
      label: "Edad →"
    },
    y: {
      label: "↑ Mision en hs"
    },
    marks: [
      Plot.lineY(datafemale,Plot.groupX({y: "sum"},{y:"mision_hs", x:"anio_mision",
      stroke: "red",
      strokeWidth: 2.5,
    }),
    ),
      Plot.lineY(datamasc,Plot.groupX({y: "sum"},{y:"mision_hs", x:"anio_mision",
      stroke: "green",
      strokeWidth: 2.5,
    }),
    ),
      //Plot.text(data, {filter: d => d.edad_mision % 5 === 0, x: "edad_mision", y: "mision_hs", text: d => `${d.edad_mision}`, dy: -8})
    ],
    color:{
      type: "categorical",
      scheme: 'blues',
    }
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
