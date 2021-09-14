import * as React from 'react';

function SvgBasket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 18" fill="none" {...props}>
      <path d="M1.863 7.55428C1.46073 6.6609 2.11419 5.65 3.09397 5.65H20.906C21.8858 5.65 22.5393 6.6609 22.137 7.55428L18.0845 16.5543C17.8664 17.0386 17.3846 17.35 16.8535 17.35H7.1465C6.61537 17.35 6.1336 17.0386 5.91553 16.5543L1.863 7.55428Z" stroke="#0F0F0F" strokeWidth="1.3"/>
      <path d="M16 10V13" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M12 10V13" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 10V13" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="0.65" y1="-0.65" x2="7.05928" y2="-0.65" transform="matrix(0.418977 0.907997 -0.810614 0.585581 14.4141 1)" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="0.65" y1="-0.65" x2="7.05928" y2="-0.65" transform="matrix(-0.418977 0.907997 0.810614 0.585581 9.07422 1)" stroke="#0F0F0F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
}

export default SvgBasket;
