import * as React from 'react';
import { css }  from 'twin.macro';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.322 12C24.322 18.6274 19.0405 24 12.5254 24C6.01034 24 0.728813 18.6274 0.728813 12C0.728813 5.37258 6.01034 0 12.5254 0C19.0405 0 24.322 5.37258 24.322 12ZM13.3845 12.4694H15.4894L15.768 9.7151H13.3847V8.09258C13.3847 7.48401 13.78 7.34111 14.0612 7.34111H15.7752V4.66508L13.4128 4.65503C10.791 4.65503 10.1953 6.65275 10.1953 7.92851V9.71253H8.67847V12.4694H10.1953V20.314H13.3845V12.4694Z" fill="white"/>
    </svg>
  );
}

export default SvgFacebook;