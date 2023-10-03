import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function History_Icon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.83 2.819c3.794-3.79 9.964-3.75 13.782.069 3.82 3.82 3.86 9.993.064 13.788-3.795 3.795-9.968 3.756-13.788-.064A9.812 9.812 0 01.09 8.332a.75.75 0 111.487.203 8.312 8.312 0 002.371 7.017c3.245 3.244 8.468 3.263 11.668.064 3.2-3.2 3.18-8.423-.064-11.668C12.31.706 7.09.685 3.89 3.88l.748.003a.75.75 0 01-.007 1.5l-2.546-.012a.75.75 0 01-.746-.747L1.325 2.08a.75.75 0 011.5-.008l.004.748v-.001zm6.92 2.18a.75.75 0 01.75.75v3.69l2.28 2.28a.75.75 0 11-1.06 1.061L9 10.06V5.75A.75.75 0 019.75 5v-.001z"
        fill="#8A8787"
      />
    </Svg>
  );
}

export default History_Icon;
