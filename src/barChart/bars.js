export const Bars = ({data, yScale, xScale, xValue, yValue, tickFormat}) => (
     data.map(
          d => 
               <rect
                    className="bars"
                    key={yValue(d)} 
                    x={0} 
                    y={yScale(yValue(d))} 
                    width={xScale(xValue(d))} 
                    height={yScale.bandwidth()}>

                    <title>{tickFormat(xValue(d))}</title>

               </rect>
     )
)