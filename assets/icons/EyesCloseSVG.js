import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <G clipPath="url(#clip0_906_84)">
        <Path
          d="M17.882 19.297A10.949 10.949 0 0112 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 013.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31h.001zM5.935 7.35A8.965 8.965 0 003.223 12a9.005 9.005 0 0013.201 5.838l-2.028-2.028A4.5 4.5 0 018.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 003.241 3.241l.001.001zm7.893 2.264l-1.431-1.43A8.934 8.934 0 0020.777 12 9.004 9.004 0 009.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.946 10.946 0 01-2.012 4.592zm-9.084-9.084a4.5 4.5 0 014.769 4.769l-4.77-4.769h.001z"
          fill="#1A1E1E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_906_84">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
