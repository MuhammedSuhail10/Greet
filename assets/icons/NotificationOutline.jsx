import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const NotificationOutline = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="notification-bell"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <Path
      id="secondary"
      d="M15,17H9a1,1,0,0,0-1,1,4,4,0,0,0,8,0A1,1,0,0,0,15,17Z"
      style={{
        fill: "rgb(44, 169, 188)",
      }}
    />
    <Path
      id="primary"
      d="M20.09,13.67,19,12.59V9A7,7,0,0,0,5,9v3.59L3.91,13.67A3.13,3.13,0,0,0,6.12,19H17.88a3.13,3.13,0,0,0,2.21-5.33Z"
    />
  </Svg>
);

export default NotificationOutline;