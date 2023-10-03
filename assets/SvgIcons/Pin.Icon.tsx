import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Pin_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={21}
      viewBox="0 0 26 21"
      fill="none"
      {...props}>
      <Path
        d="M24.791 11.128L14.097.433A1.512 1.512 0 0013.017 0h-1.645L23.68 12.167l-8.293 8.364a1.52 1.52 0 002.15 0l7.253-7.253a1.52 1.52 0 000-2.15z"
        fill="#347DE1"
      />
      <Path
        d="M20.555 11.16L9.86.457A1.512 1.512 0 008.78 0H1.52A1.52 1.52 0 000 1.52v7.261a1.512 1.512 0 00.449 1.071L11.15 20.555a1.519 1.519 0 002.15 0l7.254-7.253a1.52 1.52 0 000-2.143zM3.93 5.291a1.362 1.362 0 110-2.725 1.362 1.362 0 010 2.725z"
        fill="#347DE1"
      />
    </Svg>
  );
}

export default Pin_Icon;
