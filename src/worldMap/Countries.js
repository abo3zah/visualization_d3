import { geoEquirectangular, geoPath, geoGraticule, scaleSqrt, extent, format } from "d3"

export const Countries = ({ worldAtlas: { countries, interiors }, width, height, cities }) => {

     const projection = geoEquirectangular()
          .fitExtent([[100, 100], [width, height]], countries)
          .translate([width/2,height/2])
     const path = geoPath(projection);
     const graticule = geoGraticule();

     const cityRadius = d => d.population
     const radiusScale = scaleSqrt()
          .domain(extent(cities, cityRadius))
          .range([0, 15])

     return (
          <g className="chart">
               <path className="sea" d={path({ type: 'Sphere' })} />

               <path className="graticule" d={path(graticule())} />

               {countries.features.map(feature => {
                    
                    // console.log(feature);

                    return (
                         <path key={feature.properties.name} className="country" d={path(feature)}>
                              <title>{ feature.properties.name }</title>
                         </path>
                    )
               })}

               <path className="interiors" d={path(interiors)} />

               { cities.map((city, i) => {
                    const [x, y] = projection([city.lng, city.lat]);

                    return <circle className="city" key={i} cx={x} cy={y} r={radiusScale(cityRadius(city))}>
                         <title>{ city.city } has a population of {format('0.2s')(city.population)}</title>
                    </circle>
               })}
          </g>
     )
}