import * as React from "react";

function SvgFrance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <rect x="4" y="7" width="26" height="20" fill="#F5F8FB"/>
        <rect x="4" y="7" width="8.125" height="20" fill="#41479B"/>
        <rect x="21.875" y="7" width="8.125" height="20" fill="#E51D1D"/>
      </g>
    </svg>
  );
}

export default SvgFrance;
