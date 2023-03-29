d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    inset: 10,
    grid: false,
    marginLeft: 80,
    marginRight: 100,
    width: 800,
    x: {
      label: "",
      tickFormat: "",
    },
    y: {
      label: "↑ Horas de misión",
      tickFormat: "s",
      domain: [0,70000],
      zero: false,
    },
    marks: [
      Plot.ruleY([0]),
      Plot.ruleX([2010]),
      Plot.lineY(data,Plot.groupX({y: "sum"},{
        y:"mision_hs", 
        x:"anio_mision", 
        z: "genero",
        stroke: "genero",
        strokeWidth: 3,
    }),),
    Plot.dot(data,Plot.groupX({y: "sum"},{
      y:"mision_hs", 
      x:"anio_mision", 
      z: "genero",
      stroke: "genero",
      strokeWidth: 3,
  }),),
    Plot.text(data, {
      x:"anio_mision", 
      y:"mision_hs", 
      text: ["Mujeres"], 
      dx: 635, 
      dy: -33,
      fill: "AFF05B",}),
    Plot.text(data, {
      x:"anio_mision", 
      y:"mision_hs", 
      text: ["Hombres"], 
      dx: 635, 
      dy: -110,
      fill: "#BF3CAF",}),
    ],
    color:{
      type: "categorical",
      range: ["#AFF05B", "#BF3CAF"],
      //scheme: 'warm',
      legend: false,
    },
    style:{
      background: "black",
      color: "white",
    }
     
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
