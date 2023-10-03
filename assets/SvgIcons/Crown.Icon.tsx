import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Crown_Icon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}>
      <Path
        d="M12.525 14.235h-7.05c-.315 0-.667-.247-.772-.547L1.598 5.002c-.443-1.245.075-1.628 1.14-.863l2.925 2.093c.487.337 1.042.165 1.252-.383l1.32-3.517c.42-1.125 1.118-1.125 1.538 0l1.32 3.517c.21.548.765.72 1.245.383l2.745-1.958c1.17-.84 1.732-.412 1.252.945l-3.03 8.483c-.112.285-.465.532-.78.532zM4.875 16.5h8.25M7.125 10.5h3.75"
        stroke="#347DE1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Crown_Icon;
