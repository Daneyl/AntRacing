import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
import {pie, arc} from 'd3-shape';

const PieChart = ({width, height, percent}) => {
  const radius = Math.min(width, height) / 2;
  const data = pie().sort(null)([100 - percent, percent]);
  const path = arc()
    .outerRadius(radius)
    .innerRadius(0);
  const colors = ['#E6ECF5', '#0077B5'];

  return (
    <Svg width={width} height={height}>
      <G transform={`translate(${width / 2},${height / 2})`}>
        {data.map((datum, index) => (
          <Path key={`arc${index}`} d={path(datum)} fill={colors[index]} />
        ))}
      </G>
    </Svg>
  );
};

export default PieChart;
