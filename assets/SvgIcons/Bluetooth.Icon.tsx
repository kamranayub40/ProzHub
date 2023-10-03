import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Bluetooth_Icon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={20}
      viewBox="0 0 13 20"
      fill="none"
      {...props}>
      <Path
        d="M6.142 20v-7.6L1.433 17 0 15.6 5.732 10 0 4.4 1.433 3l4.709 4.6V0h1.023L13 5.7 8.598 10 13 14.3 7.165 20H6.142zM8.189 7.6l1.945-1.9-1.945-1.85V7.6zm0 8.55l1.945-1.85-1.945-1.9v3.75z"
        fill="#347DE1"
      />
    </Svg>
  );
}

export default Bluetooth_Icon;
