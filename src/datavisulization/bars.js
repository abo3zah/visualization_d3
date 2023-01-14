import {format} from 'd3'

export const Bars = ({data, yScale, xScale, xValue, yValue}) => (
     data.map(
          d => 
               <rect
                    className="bars"
                    key={yValue(d)} 
                    x={0} 
                    y={yScale(yValue(d))} 
                    width={xScale(xValue(d))} 
                    height={yScale.bandwidth()}>
                    
                    <title>{format("0.4s")(xValue(d))}</title>

               </rect>
     )
)