d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
/*  let datafemale = data.filter(
    d => d.genero === "Femenino"
  )

  let datamasc = data.filter(
    d => d.genero === "Masculino"
  )
*/  
  let chart = Plot.plot({
    inset: 10,
    //grid: true,
    
    x: {
      tickFormat: "",
      
    },
    y: {
      label: "↑ Horas de misión",
      tickFormat: "s",
      labelOffset: 35,
      
      
      
    },
    marks: [
      Plot.lineY(data,Plot.groupX({y: "sum"},{
        y:"mision_hs", 
        x:"anio_mision", 
        z: "genero",
        stroke: "genero",
        strokeWidth: 3,
    }),),
    ],
    color:{
      type: "categorical",
      scheme: 'puor',
      legend: true,
      marginLeft: 100,
      background: 'black',
      
      
    },
    style: {
      fontSize: 12.5,
      background: 'hsl(0, 100%, 0%)',
      color: 'white', 
      
    },
    fx:{
      padding: 100,
    },
    marginBottom: 55,
    marginLeft: 200,
    marginTop: 30,
    marginRight: 30,
    
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
