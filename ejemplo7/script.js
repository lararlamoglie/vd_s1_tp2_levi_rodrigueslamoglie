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
      fontSize: 14,
      dx: 635, 
      dy: -29,
      fill: "AFF05B",}),
    Plot.text(data, {
      x:"anio_mision", 
      y:"mision_hs", 
      text: ["Hombres"], 
      fontSize: 14,
      dx: 640, 
      dy: -102,
      fill: "#d749b2",}),
    ],
    color:{
      type: "categorical",
      range: ["#AFF05B", "#d749b2"],
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
