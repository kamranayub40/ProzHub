import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Scanner_Icon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      {...props}>
      <Path
        d="M1 4.333V2.667A1.667 1.667 0 012.667 1h1.666m8.334 0h1.666A1.666 1.666 0 0116 2.667v1.666m0 8.334v1.666A1.666 1.666 0 0114.333 16h-1.666m-8.334 0H2.667A1.667 1.667 0 011 14.333v-1.666M4.333 8.5h8.334"
        stroke="#8A8787"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Scanner_Icon;
