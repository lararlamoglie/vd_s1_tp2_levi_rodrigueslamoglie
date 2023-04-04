d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Alemania', 'China', 'Reino Unido', 'Italia', 'Canada'].includes(d.nacionalidad));
  
  // group the data by country
  const dataByCountry = d3.group(data, d => d.nacionalidad);

  // sort each group by mision_hs
  dataByCountry.forEach((value, key, map) => {
    value.sort((a, b) => d3.descending(a.mision_hs, b.mision_hs));
  });

  let chart = Plot.plot({
    y: {
      domain: data.map(d => d.ocupacion),
      labelOffset: 180,
      label: 'Ocupación',
      fontSize: 100,
    },
    marks: [
      //Plot.text(['Horas de misión por ocupación'], {frameAnchor: "top", fontSize: 18,},),
      Plot.axisX({
        anchor: "bottom", 
        //tickFormat: "", 
        labelOffset: 17,
        tickSize: 5,
      }),
      Plot.barX(data, Plot.groupY(
        {x: "sum"}, 
        {
          x: "mision_hs", 
          y: "ocupacion", 
          fill:'ocupacion', 
          sort: {y: "x", reverse: false},
        }
      )),
      Plot.ruleX[0],
      Plot.gridX({insetTop:80,}),
    ],
  
    x: {
      domain: [0,300000], 
      grid: true, 
      tickFormat: "", 
      type: "linear", 
      grid: true, 
      labelOffset:40, 
      label: 'Misión en horas',
    },
  
    style: {
      fontFamily: 'sans-serif',
      fontSize: 13,
      padding: '100px',
      background: 'hsl(0, 100%, 0%)',
      color: 'white',
    },
  
    width: 900,
    height: 450,
    marginLeft: 200,
    marginBottom: 200,
    marginTop: 10,
    marginRight: 130,
    insetTop: 0,
  
    color: {
      type: "categorical",
      scheme: 'blues',
    }
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
