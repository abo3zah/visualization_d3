export const Face = ({ x, y, radius, handleMouseMove, handleMouseLeave }) => (
     <circle cx={x} cy={y} r={radius} fill="gold" 
     stroke='black' strokeWidth={3} onMouseMove={handleMouseMove}
     onMouseLeave={handleMouseLeave} />
)