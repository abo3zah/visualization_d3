export const YTicks = ({ yScale }) => (
     yScale.domain().map(tickValue => {
          return (
               <g key={tickValue} className='tick'>
                    <text textAnchor='end' x='-9' dy='0.32em' y={yScale(tickValue) + yScale.bandwidth() / 2}>{tickValue}</text>
               </g>
          )
     })
)