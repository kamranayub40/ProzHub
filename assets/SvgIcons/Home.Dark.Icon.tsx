import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Home_Dark_Icon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={17}
      viewBox="0 0 19 17"
      fill="none"
      {...props}>
      <Path
        d="M7.198 15.655v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L9.868.255c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87h1.7v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        fill="#8A8787"
      />
    </Svg>
  );
}

export default Home_Dark_Icon;
