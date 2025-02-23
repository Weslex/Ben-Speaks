import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TrashSvg = (props: any) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#FF0000"
    {...props}
  >
    <Path
      d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"
      stroke="#FF0000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6"
      stroke="#FF0000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default TrashSvg;
