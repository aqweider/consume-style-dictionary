import * as React from 'react';
import { css }  from 'twin.macro';

function SvgMonogramLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={74.446}
      {...props}
    >
      <path
        data-name="Path 104"
        d="M0 72.76V2.409h18.6v40.2L55.779 0 70 11.862 47.54 37.384c7.838 9.353 14.973 15.374 21.205 18.161l-7.436 18.9Q47.761 68.56 34.272 52.427L16.489 72.76z"
        fill="#0f0f0f"
      />
    </svg>
);
}

export default SvgMonogramLogo;