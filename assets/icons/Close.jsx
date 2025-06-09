import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Close = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path
            d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"
        />
    </Svg>
);

export default Close;