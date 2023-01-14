import {format} from 'd3'

export const XTicks = ({xScale, innerHeight}) => (
     xScale.ticks().map(tickValue => {
          return(
               <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},${innerHeight})`}>
                    <line y2={-innerHeight} stroke='#C0C0BB' />
                    <text textAnchor='middle' dy='0.9em'>{format('0.2s')(tickValue)}</text>
               </g>
          )
     })
)