import { useWorldAtlas } from "./useWorldAtlas"
import { Countries } from "./Countries";
import './worldMap.css'
import { useCities } from "./useCities";
import { select, zoom } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

export const WorldMap = () => {

     const worldAtlas = useWorldAtlas()
     const cities = useCities()

     const handleZoom = (e) => {
          select('g.chart')
               .attr('transform', e.transform);
     }

     const zoomed = zoom().on('zoom', handleZoom);
     
     select('svg').call(zoomed)

     if (!worldAtlas || !cities) {
          return (
               <svg width={width} height={height}>
                    <text x={width / 2} y={height / 2}>'loading'</text>
               </svg>
          )
     }

     return (
          <svg width={width} height={height}>
               <Countries worldAtlas={worldAtlas} width={width} height={height} cities={cities} />
          </svg>
     )
}