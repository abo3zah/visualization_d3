export const FaceContainer = ({ children, width, height, centerX, centerY, faceRadius }) => (
     <svg width={width} height={height}>
          <g className="face-container" transform={`translate(${centerX},${centerY - faceRadius / 3})`}>
               {children}
          </g>
     </svg>
)