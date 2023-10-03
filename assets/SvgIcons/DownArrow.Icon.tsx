import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Down_Arrow_Icon(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <Path
        d="M16.6 7.425l-5.433 5.433a1.655 1.655 0 01-2.334 0L3.4 7.425"
        stroke="#979797"
        strokeWidth={1.25}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Down_Arrow_Icon;
