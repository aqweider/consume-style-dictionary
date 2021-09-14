import * as React from 'react';

function SvgKmember(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 11.2509V0.855891H2.65663V6.79631L7.96846 0.5L10 2.25276L6.7914 6.02373C7.91111 7.40577 8.93047 8.2955 9.82079 8.70774L8.75842 11.5C7.4681 10.9202 6.17778 9.83621 4.89606 8.24656L2.35556 11.2509H0Z" fill="#0F0F0F"/>
      <path d="M15.5 7.5C13.0147 7.5 11 8.84315 11 10.5V11.5H20V10.5C20 8.84315 17.9853 7.5 15.5 7.5Z" fill="#0F0F0F"/>
      <path d="M18 4C18 5.38071 16.8807 6.5 15.5 6.5C14.1193 6.5 13 5.38071 13 4C13 2.61929 14.1193 1.5 15.5 1.5C16.8807 1.5 18 2.61929 18 4Z" fill="#0F0F0F"/>
    </svg>
  );
}

export default SvgKmember;
