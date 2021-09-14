import * as React from 'react';
import { css }  from 'twin.macro';

function SvgFb(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg width="1em" height="1em" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3.125 8.33333H0V12.5H3.125V25H8.33333V12.5H12.0833L12.5 8.33333H8.33333V6.5625C8.33333 5.625 8.54167 5.20833 9.47917 5.20833H12.5V0H8.54167C4.79167 0 3.125 1.66667 3.125 4.79167V8.33333Z" fill="#0F0F0F"/>
      </svg>
);
}

export default SvgFb;
