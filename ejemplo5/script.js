d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Alemania', 'China', 'Reino Unido', 'Italia', 'Canada'].includes(d.nacionalidad));
  const dataByCountry = d3.group(data, d => d.nacionalidad);
  // create a new array with one element per country, containing the country name, smallest year and greatest year
  const countriesYears = Array.from(dataByCountry, ([nacionalidad, values]) => {
    const minYear = d3.min(values, d => d.anio_mision);
    const maxYear = d3.max(values, d => d.anio_mision);
    return { nacionalidad, minYear, maxYear };
  })
  
    let csvContent = d3.csvFormat(countriesYears);
    console.log(countriesYears)
    console.log(data) //ver en pantalla
    // Guardamos el svg generado en la variable chart
  
    let objData = {}
    data.forEach(mission => {
      if (objData[mission.nacionalidad] != undefined) {
        objData[mission.nacionalidad] += 1;
        return;
      } else {
        objData[mission.nacionalidad] = 0;
      }
  })
  
    objData = Object.fromEntries(
      Object.entries(objData).map(([key, value]) => [key, (value / data.length)*100])
    )
    console.log(objData)
/*
  const dataByYear = d3.group(data, d => d.nacionalidad);
  const dataByYear = Array.from(dataByYear, ([nacionalidad, values]) => {
  

  let csvContent2 = d3.csvFormat(dataByYear);
  console.log(dataByYear)
  console.log(data) 
  
  //ver en pantalla
  // Guardamos el svg generado en la variable chart

   //return { count(dataByYear)/(sum(count))};
 //ver en pantalla
  // Guardamos el svg generado en la variable chart

  
  //var data = data.filter(d=> ['EE.UU.', 'U.S.S.R/Rusia'].includes(d.mision_hrs, d.nacionalidad));
  //console.log(data)


  //ver en pantalla
  // Guardamos el svg generado en la variable chart

*/
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
    
    
    
    y: {
        
        labelOffset: 60,
        label: "Cantidad de \n misiones" 
        

      },
      x:{
        tickFormat: "",
        type: "linear",
        label: "Año de misión",
      },
      marks: [
        //Plot.text(['Misiones espaciales por año'], {frameAnchor:"top", fontSize: 18,},),
        Plot.axisX({anchor: "bottom", 
          tickFormat: "", 
          labelOffset: 35,
          tickSize: 5,
          color: "black",
        }),
        Plot.axisY({labelAnchor:"center",
          labelOffset: 70,
      }),
        Plot.rectY(data, Plot.binX({y: "count"}, {x: "anio_mision", fill:'nacionalidad', sort: 'nacionalidad',})),
      ],
      color:{
        type: "categorical", 
        scheme: 'set3',
        nice: true, 
        legend: true,
      },
      width: 550,
      width: 700,
      height: 500,
      marginTop: 30,
      marginBottom: 50,
      marginLeft: 80,
      marginRight: 65,
      insetLeft: 5,
      insetBottom: 5,
      insetTop: 0,
      style:{
        fontFamily: "sans-serif",
        fontSize: 12,
      }

    })
    
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})

