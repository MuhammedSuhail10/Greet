import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Block = (props) => (
    <Svg
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} strokeWidth={2} />
        <Path d="M5 19L19 5"  strokeWidth={2} />
    </Svg>
);

export default Block;