import React from 'react';

function ReferenceBands(props) {
    const { x } = props;
    const bands = [
      { color: "#A52A2A", y: 0, height: 263 }
    ];
  
    return (
      <g>
        {bands.map(({ color, y, height }, index) => (
          <rect
            key={index}
            x={86}
            y={y}
            width={86}
            height={height}
            fill={color}
            fillOpacity={0.7}
          />
        ))}
      </g>
    );
  }

export default ReferenceBands;