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


  let chart = Plot.plot({
    height: 300,
    width: 800,
    marginLeft: 30,
    x: {
      tickFormat: "",
      labelOffset: 30,
      axis: "top",
      
      domain: [2009, 2020],
      //tickFormat: formatYear
      color: "white",
    },
    y: {
      axis: null,
      labelOffset: 30,
      color: "white",
      domain: d3.sort(countriesYears, d=> d.minYear).map(d => d.nacionalidad)
    },
    marks: [
      Plot.rectX([2009]),
      Plot.rectX([2020]),
      Plot.barX(countriesYears, {
        x1: "minYear",
        x2: "maxYear",
        y: "nacionalidad",
        fill: "nacionalidad",
       
      }),
      Plot.text(countriesYears, {
        x: "minYear",
        y: "nacionalidad",
        text: "nacionalidad",
        //textAnchor: "middle",
        //color: "black",
        fontSize:11,
        dx: 50 }),
    ],
    color:{
      type: "categorical",
      legend: true,
      background: 'black',
      //domain: d3.range(10).map(d => `Category ${d + 1}`), 
      /*range: [   '#1974D2'
        "#D7A9A8",
        "#A0C3D2",
        "#F1C8B3",
        "#BAA8D7",
        "#B8D8D8",
        "#F9E79F",
        "#E2D7F2", 
        "#C8E6C9"   '#FF007F'
        '#922FC2'
      ],*/
      range: ['#66FF00','#1974D2', '#08E8DE', '#FFAA1D','#922FC2','#F21C23', '#DBE600','#FF007F'],
      legend: false,
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize: 10,
      background: 'hsl(0, 0%, 0%)',
      color: 'white',
      padding: '1px',
    },
   
      insetLeft: 5,
      insetBottom: 5,
      insetTop: 40,
    insetTop: 2,
    insetBottom: -3,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) //agregamos el grafico a index.html
})
