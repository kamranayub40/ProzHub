import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Filter_Icon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      {...props}>
      <Path
        d="M.75 0h14.5c.199 0 .39.1.53.277.141.178.22.42.22.67 0 .252-.079.493-.22.67a.681.681 0 01-.53.278H.75c-.199 0-.39-.1-.53-.278A1.087 1.087 0 010 .947c0-.25.079-.492.22-.67A.681.681 0 01.75 0zM3 6c0-.251.079-.492.22-.67a.681.681 0 01.53-.277h8.5c.199 0 .39.1.53.277.141.178.22.419.22.67 0 .251-.079.492-.22.67a.681.681 0 01-.53.277h-8.5c-.199 0-.39-.1-.53-.277A1.087 1.087 0 013 6zm3 5.053c0-.252.079-.493.22-.67a.681.681 0 01.53-.278h2.5c.199 0 .39.1.53.278.141.177.22.418.22.67 0 .25-.079.492-.22.67a.681.681 0 01-.53.277h-2.5c-.199 0-.39-.1-.53-.277a1.086 1.086 0 01-.22-.67z"
        fill="#347DE1"
      />
    </Svg>
  );
}

export default Filter_Icon;