export const Eyes = ({ radius }) => (
     <g>
          <circle cx={radius / 3} r={radius / 10} fill="white" stroke='black' strokeWidth={3} />
          <circle cx={-radius / 3} r={radius / 10} fill="white" stroke='black' strokeWidth={3} />
          <circle cx={radius / 3} r={radius / 10 / 2} fill="black" stroke='black' strokeWidth={3} />
          <circle cx={-radius / 3} r={radius / 10 / 2} fill="black" stroke='black' strokeWidth={3} />
     </g>
)