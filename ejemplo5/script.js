d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Reino Unido'].includes(d.nacionalidad));
  data1 = data.filter(d => [2010].includes(d.anio_mision));
  data2 = data.filter(d => [2011].includes(d.anio_mision));
  data3 = data.filter(d => [2012].includes(d.anio_mision));
  data4 = data.filter(d => [2013].includes(d.anio_mision));
  data5 = data.filter(d => [2014].includes(d.anio_mision));
  data6 = data.filter(d => [2015].includes(d.anio_mision));

  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera una visualizacion, guarda el gráfico en la variable chart
      y: {
        grid: true,
        labelOffset: 60,
        label: "Cantidad de \n misiones" 
      },
      x:{
        tickFormat: "",
        type: "linear",
        label: "Año de misión",
        //round: true,
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
        Plot.barY(data,{
          x: "anio_mision",
          y
        })
      ],
      color:{
        type: "categorical", 
        scheme: 'set2',
        nice: true, 
        legend: true,
      },
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

