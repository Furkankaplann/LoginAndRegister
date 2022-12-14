import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={18}
      viewBox="0 0 22 18"
      fill="none"
      {...props}>
      <Path
        d="M11 0c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9C5.608 18 1.122 14.12.181 9 1.121 3.88 5.608 0 11 0zm0 16a9.005 9.005 0 008.777-7A9.005 9.005 0 002.223 9 9.005 9.005 0 0011 16zm0-2.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#1A1E1E"
      />
    </Svg>
  );
}

export default SvgComponent;
