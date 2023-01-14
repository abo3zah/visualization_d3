import { scaleBand, scaleLinear, max } from 'd3'
import { useData } from './useData'
import { YTicks } from './yTicks'
import { XTicks } from './xTicks'
import { Bars } from './bars'
import './main.css'

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 20, bottom: 100, left: 250 }
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xValue = d => d['2020'];
const yValue = d => d['Country'];

export const Main = () => {
     const data = useData(xValue);

     if (!data) {
          return (
               <svg width={width} height={height}>
                    <text x={width / 2} y={height / 2}>'loading'</text>
               </svg>
          )
     }

     const yScale = scaleBand()
          .domain(data.map(yValue))
          .range([0, innerHeight])
          .padding(0.15)

     const xScale = scaleLinear()
          .domain([0, max(data, xValue)])
          .range([0, innerWidth])

     return (
          <svg width={width} height={height}>
               <g transform={`translate(${margin.left},${margin.top})`}>
                    <rect className='chartBackground' width={innerWidth} height={innerHeight} />
                    <XTicks xScale={xScale} innerHeight={innerHeight} />
                    <YTicks yScale={yScale} />
                    <text className='xAxis label' textAnchor='middle' dy='2em' alignmentBaseline='middle' x={innerWidth/2} y={innerHeight}>
                         Hourse Power
                    </text>
                    <Bars data={data} yScale={yScale} xScale={xScale} xValue={xValue} yValue={yValue} />
               </g>
          </svg>
     )
}
