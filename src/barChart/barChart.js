import { scaleBand, scaleLinear, extent, format } from 'd3'
import { useData } from './useData'
import { YTicks } from './yTicks'
import { XTicks } from './xTicks'
import { Bars } from './bars'
import './barChart.css'

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 20, bottom: 100, left: 300 }
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xAxisLabel = 'Births by women aged 15 to 19'
const xValue = d => d[xAxisLabel];
const yValue = d => d['area'];
const tickFormat = n => format('0.3s')(n).replace('G','B')

export const BarChart = () => {
     const data = useData(xValue);

     // console.log(data);

     if (!data) {
          return (
               <svg width={width} height={height}>
                    <text x={width / 2} y={height / 2}>'loading'</text>
               </svg>
          )
     }

     console.log(extent(data, xValue));

     const yScale = scaleBand()
          .domain(data.map(yValue))
          .range([0, innerHeight])
          .paddingInner(0.15)

     const xScale = scaleLinear()
          .domain(extent(data, xValue))
          .range([0, innerWidth])
          .nice()

     return (
          <svg width={width} height={height}>
               <g transform={`translate(${margin.left},${margin.top})`}>
                    <rect className='chartBackground' width={innerWidth} height={innerHeight} />
                    <XTicks xScale={xScale} innerHeight={innerHeight} xAxisLabel={xAxisLabel} tickFormat={tickFormat} />
                    <YTicks yScale={yScale} />
                    <text className='xAxis label' textAnchor='middle' dy='2em' alignmentBaseline='middle' x={innerWidth/2} y={innerHeight}>
                         {xAxisLabel}
                    </text>
                    <Bars data={data} yScale={yScale} xScale={xScale} xValue={xValue} yValue={yValue} tickFormat={tickFormat} />
               </g>
          </svg>
     )
}
