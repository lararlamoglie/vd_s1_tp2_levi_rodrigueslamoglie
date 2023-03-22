d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => ['EE.UU.', 'U.S.S.R/Rusia', 'Japon', 'Italia', 'Alemania', 'China', 'Reino Unido', 'Italia', 'Canada'].includes(d.nacionalidad));
  const dataByCountry = d3.group(data, d => d.nacionalidad);
  // create a new array with one element per country, containing the country name, smallest year and greatest year
  const countriesYears = Array.from(dataByCountry, ([nacionalidad, values]) => {
    const minYear = d3.min(values, d => d.anio_mision);
    const maxYear = d3.max(values, d => d.anio_mision);
    return { nacionalidad, minYear, maxYear };
  });

  let csvContent = d3.csvFormat(countriesYears);
  console.log(countriesYears)
  console.log(data) //ver en pantalla
  // Guardamos el svg generado en la variable chart

  let chart = Plot.plot({
    height: 250,
    width: 700,
    marginLeft: 30,
    x: {
      tickFormat: "",
      label: 'Años',
      labelOffset: 30,
      axis: "top",
      grid: true,
      domain: [2010, 2020]
      //tickFormat: formatYear
    },
    y: {
      axis: null,
      labelOffset: 30,
      domain: d3.sort(countriesYears, d=> d.minYear).map(d => d.nacionalidad)
    },
    marks: [
      Plot.barX(countriesYears, {
        x1: "minYear",
        x2: "maxYear",
        y: "nacionalidad",
        fill: "nacionalidad",
      }),
      Plot.text(countriesYears, {
        x: "maxYear",
        y: "nacionalidad",
        text: "nacionalidad",
        textAnchor: "minYear",
        dx: 18 }),
    ],
    color:{
      type: "categorical",
      legend: true,
      //domain: d3.range(10).map(d => `Category ${d + 1}`), 
      range: [
        "#D7A9A8",
        "#A0C3D2",
        "#F1C8B3",
        "#BAA8D7",
        "#B8D8D8",
        "#F9E79F",
        "#E2D7F2",
        "#C8E6C9"
      ],
      legend: false,
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize: 10,
      background: 'hsl(0, 0%, 100%)',
      color: 'black',
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
