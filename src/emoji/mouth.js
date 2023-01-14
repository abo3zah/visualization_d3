import { arc } from 'd3'

export const Mouth = ({ radius, mouseOnTop, handleMouseMove }) => {
     const mouthArc = arc()
          .innerRadius(!mouseOnTop ? radius : 0)
          .outerRadius(radius)
          .startAngle(Math.PI / 2)
          .endAngle(1.5 * Math.PI);
     return <path className='mouth' transform={`translate(0,${radius})`} d={mouthArc()} onMouseMove={handleMouseMove} />
}