d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia'].includes(d.nacionalidad));
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    facet:{
      data: data,
      x: "nacionalidad",
      label: "",
    },
    fx:{
      padding: 0.1,
    },
    marks: [
      Plot.frame(),
      Plot.dot(data,
        Plot.groupX({y:"mean"},
          {x: "edad_mision",
          y: "mision_hs", 
          fill: "nacionalidad",
          stroke: "nacionalidad",
          r: 6,
          fillOpacity: 1,
        })
      ),
    ],
    y: {
      label: '↑ Horas de misión',
      labelOffset: 50,
      domain: [1,10900]
    },
    x: {
      
      label: '→ Edad',
      labelOffset: 18,
      domain: [30,60]
    },
    color:{
      type: "categorical",
      scheme:'warm',
      legend: false,
    },

    style:{
      fontFamily: 'sans-serif',
      fontSize: 12,
      background: 'hsl(0, 100%, 0%)',
      color: 'white',
      padding: '1px',
    },
    marginLeft: 50,
    marginRight: 70,
    marginTop:25,
    insetTop: 0,
    insetLeft: 0,
    insetRight: 0,
    width: 900,
    height: 400,
    
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
